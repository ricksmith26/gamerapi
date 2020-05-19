
const database = {
	host: "gamer-database.cdhxwqpgddxe.eu-west-2.rds.amazonaws.com",
	port: 5432,
	database: "postgres",
	user: "masterUsername",
	password: "gamerpass"
};

const pgp = require("pg-promise")({ promiseLib: Promise });
const db = pgp(database);

module.exports = {
    pgp, db
};
