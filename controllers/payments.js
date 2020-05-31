const {pgp, db} = require('./config');

const stripe = require('stripe')('sk_test_G3vurnxjtg2gZRf6lQMT8YwA00fCJKlgLx');

exports.addToken = (req, res ,next) => {
    const {user_id, payment_token} = req.body;
    db.many(
        "INSERT INTO payment_tokens (user_id, payment_token) VALUES (user_id, payment_token)  RETURNING *;"
    ).then((games) => {
        res.send(games)
    })
    .catch(next)
}

exports.createIntent = async (req, res, next) => {
    const [basket, id] = req.body;

    const ids = Object.values(basket).map(item => {
        return item.product_id
    });

    const query = Object.values(basket).reduce((acc, item, i) => {
        acc+= `${i !== 0 ? ' UNION ' : ''}SELECT product_id, product_price FROM products WHERE products.product_id = $${i + 1}`;
        return acc;
    }, '')

    db.many(
        query,
        ids
    ).then( async (items) => {

        const total = items.reduce((acc, item) => {
            console.log(Number(item.product_price), basket, 'item.product_price')
            acc+= item.product_price * basket[item.product_id].qty;
            return acc;
        }, 0).toFixed(2)

        const intent = await stripe.paymentIntents.create({
            amount: Math.floor(total * 100),
            currency: 'gbp',
            setup_future_usage: 'off_session'
          });

        res.send(intent);

    }).catch(next)
}