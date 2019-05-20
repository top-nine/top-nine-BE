const knex = require("knex");
const config = require("../knexfile");

const dbEnv = process.env.DB_ENV || "development";
const db = knex(config.development);
module.exports = db;
