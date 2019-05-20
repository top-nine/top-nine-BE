const db = require("../database/dbConfig");

module.exports = {
  find,
  findByEmail,
  addItem,
  deleteItem,
  findById
};

function find() {
  return db("TopNine");
}
function findById(id) {
  return db("TopNine").where({ id });
}
function findByEmail(email) {
  return db("TopNine")
    .select("*")
    .where("email", "=", email);
}

function addItem(item) {
  return db("TopNine").insert(item, "id");
}
function deleteItem(id) {
  return db("TopNine")
    .where({ id })
    .delete();
}
