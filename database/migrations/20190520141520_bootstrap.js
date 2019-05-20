exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("Users", tbl => {
      tbl.increments();

      tbl.string("name", 100).notNullable();
      tbl
        .string("email", 100)
        .unique()
        .notNullable();
      tbl.string("password", 100).notNullable();
    })
    .createTable("TopNine", tbl => {
      tbl.increments();
      tbl.string("title", 100).notNullable();
      tbl.string("description", 255).notNullable();
      tbl.string("image_url", 255);
      tbl
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("Users")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("TopNine").dropTableIfExists("Users");
};
