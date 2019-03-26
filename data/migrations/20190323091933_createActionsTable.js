
exports.up = function(knex, Promise) {
  return knex.schema.createTable('actions', tbl => {
      tbl.increments();
      tbl.string('action_name').notNullable().unique();
      tbl.string('action_description').notNullable();
      tbl.string('notes').notNullable();
      tbl.boolean('is_finished').notNullable().defaultTo(false);
      tbl.integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('actions');
};
