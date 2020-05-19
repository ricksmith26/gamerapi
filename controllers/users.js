const {pgp, db} = require('./config');
const randtoken = require('rand-token');

exports.registerUser = (req, res ,next) => {
    const {
        user_first_name,
        user_last_name,
        user_email,
        user_password,
        user_phone_number,
        user_address1,
        user_address2,
        user_address3,
        user_post_code
     } = req.body;
    db
    .one(
      "INSERT INTO users (user_first_name, user_last_name, user_email, user_password, user_phone_number, user_address1, user_address2, user_address3, user_post_code, last_login, login_token) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *",
      [ user_first_name,
        user_last_name,
        user_email,
        user_password,
        user_phone_number,
        user_address1,
        user_address2,
        user_address3,
        user_post_code,
        Date.now(),
        randtoken.generate(16)
    ]
    ).then(user => {
        res.send(user);
    })
    .catch(next)
}

exports.loginFromToken = (req, res, next) => {
    const token = req.params.token;
    db.one(
        'SELECT * FROM users WHERE users.login_token = $1;', [token]
    ).then((user) => {
        console.log(user, 'user<<<,,')
        const currentTime = Date.now();
        if ((currentTime - user.last_login) < 14400000){
            db.one(
                `UPDATE users SET last_login = ${currentTime} WHERE user_email = $1 RETURNING *;`, [user.user_email]
            ).then((updatedUser) => {
                res.send({valid: true, user: updatedUser})
            }).catch(next)
        } else {
            res.send({valid: false})
        }
    })
    .catch(next);
}

exports.loginFromEmail = (req, res, next) => {
    const { user_email, user_password} = req.body;
    db.one(
        'SELECT * FROM users WHERE users.user_email = $1;', [user_email]
    ).then((user) => {
        if (user.user_password === user_password) {
            const currentTime = Date.now();
            db.one(
                `UPDATE users SET login_token = '${randtoken.generate(16)}', last_login = ${currentTime} WHERE user_email = $1 RETURNING *;`, [user_email]
            ).then((user) => {
                res.send({valid: true, user})
            })
        } else {
            res.send({valid: false})
        }
    })
    .catch(next);
}