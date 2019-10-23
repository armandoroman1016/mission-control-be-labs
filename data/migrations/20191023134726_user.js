exports.up = function(knex) {
  return knex.schema.createTable("users", user => {
    user
      .string("id")
      .unique()
      .notNullable()
      .primary();
    user.string("first_name").notNullable();
    user.string("last_name").notNullable();
    user
      .string("email")
      .unique()
      .notNullable();
    user.string("password").notNullable();
    user
      .string("role")
      .defaultTo("student")
      .enu("roles", ["student", "manager", "admin"])
      .notNullable()
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    user.string("accessToken").notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("users");
};
