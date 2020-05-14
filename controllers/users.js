const {pgp, db} = require('./config');

exports.addUser = (req, res ,next) => {
    const {
        first_name,
        last_name,
        email,
        phone_number,
        address_1,
        address_1,
        address_1,
        post_code
     } = req.body;
    db
    .one(
      "INSERT INTO users (first_name, last_name, email, phone_number, address_1, address_1, address_1, post_code) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [ first_name,
        last_name,
        email,
        phone_number,
        address_1,
        address_1,
        address_1,
        post_code
    ]
    ).then(user => {
        res.send(user);
    })
    .catch(next)
}