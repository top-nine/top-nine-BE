exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("TopNine")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("TopNine").insert([
        {
          title: "1st item",
          description: "1st ever item added",
          user_id: 1,
          image_url: "sggsege"
        },
        {
          title: "2nd item",
          description: "2nd ever item added",
          user_id: 2,
          image_url: "sggsege"
        },
        {
          title: "2nd item",
          description: "2nd ever item added",
          user_id: 2,
          image_url: "sggsege"
        },
        {
          title: "3rd item",
          description: "3rd ever item added",
          user_id: 3,
          image_url: "sggsege"
        }
      ]);
    });
};
