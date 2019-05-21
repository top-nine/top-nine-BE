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
  return db("Users")
    .where({ id })
    .first();
}
function findByEmail(email) {
  return db("Users")
    .select("*")
    .where("email", "=", email)
    .first();
}

function addUser(user) {
  return db("Users")
    .insert(user, "id")
    .then(([id]) => {
      return findById(id);
    });
}
function deleteUser(id) {
  return db("Users")
    .where({ id })
    .delete();
}
