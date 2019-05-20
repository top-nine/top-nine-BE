exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("TopNine")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("TopNine").insert([
        {
          title: "3rd item",
          description: "3rd ever item added",
          user_id: 2,
          image_url: "sggsege"
        }
      ]);
    });
};
