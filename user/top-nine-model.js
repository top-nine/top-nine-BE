const db = require("../database/dbConfig");

module.exports = {
  find,
  findByEmail,
  addItem,
  deleteItem,
  findById,
  updateItem,
  findOneById
};

function find() {
  return db("TopNine");
}
function findById(id) {
  return db("TopNine").where("user_id", "=", id);
}
function findOneById(id) {
  return db("TopNine")
    .where({ id })
    .first();
}
function findByEmail(email) {
  return db("TopNine")
    .select("*")
    .where("email", "=", email);
}

function addItem(item) {
  return db("TopNine")
    .insert(item, "id")
    .then(([id]) => {
      return findOneById(id);
    });
}

function updateItem(id, changes) {
  return db("TopNine")
    .where({ id })
    .update(changes)
    .then(count => {
      if (count > 0) {
        return findOneById(id);
      } else {
        return null;
      }
    });
}

function deleteItem(id) {
  return db("TopNine")
    .where({ id })
    .del();
}
