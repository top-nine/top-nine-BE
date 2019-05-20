const db = require("../database/dbConfig");

module.exports = {
  find,
  findByEmail,
  addUser,
  deleteUser,
  findById
};

function find() {
  return db("Users");
}
function findById(id) {
  return db("Users").where({ id });
}
function findByEmail(email) {
  return db("Users")
    .select("*")
    .where("email", "=", email);
}

function addUser(user) {
  return db("Users").insert(user, "id");
}
function deleteUser(id) {
  return db("Users")
    .where({ id })
    .delete();
}
