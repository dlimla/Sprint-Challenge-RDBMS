
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          project_name:'complete sprint challenge create projects and actions',
          project_description: "build out the api and be able to retrieve a project with all its actions"
        }
      ]);
    });
};
