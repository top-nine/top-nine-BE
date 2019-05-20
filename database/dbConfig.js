const knex = require("knex");

const dbEnv = process.env.DB_ENV || "development";
const config = require("../knexfile")[dbEnv];
const db = knex(config);
module.exports = db;
