exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("Users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("Users").insert([
        { name: "test1", email: "test@test.com", password: "test" },
        { name: "test2", email: "test2@test.com", password: "test2" },
        { name: "test3", email: "test3@test.com", password: "test3" }
      ]);
    });
};
