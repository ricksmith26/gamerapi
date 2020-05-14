
const database = {
	host: "gamer-database.cdhxwqpgddxe.eu-west-2.rds.amazonaws.com",
	port: 5432,
	database: "postgres",
	user: "masterUsername",
	password: "gamerpass"
};


// const initOptions = {
// 	// host: "gamer-database.cdhxwqpgddxe.eu-west-2.rds.amazonaws.com",
// 	// port: 5432,
// 	// database: "postgres",
// 	// user: "masterUsername",
// 	// password: "gamerpass"
// };

// const pgp = require("pg-promise")({ promiseLib: Promise });

// // const cn = 'postgres://masterUsername:gamerpass@host:gamer-database.cdhxwqpgddxe.eu-west-2.rds.amazonaws.com/postgres';
// const db = pgp(connection);

// module.exports = {
//     pgp, db
// };

// const {database} = require('./config');
const pgp = require("pg-promise")({ promiseLib: Promise });
const db = pgp(database);

module.exports = {
    pgp, db
};
