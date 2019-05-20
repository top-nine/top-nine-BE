const knex = require("knex");
const config = require("../knexfile")[dbEnv];

const dbEnv = process.env.DB_ENV || "development";
const db = knex(config);
module.exports = db;
