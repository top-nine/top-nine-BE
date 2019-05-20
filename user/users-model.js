const db = require("../database/dbConfig");

module.exports = {
  find,
  findById,
  addUser,
  deleteUser
};

function find() {
  return db("Users");
}
function findById(id) {
  return db("Users").where({ id });
}
function addUser(user) {
  return db("Users").insert(user, "id");
}
function deleteUser(id) {
  return db("Users")
    .where({ id })
    .delete();
}
