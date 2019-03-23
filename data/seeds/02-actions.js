
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('actions').insert([
        {
          project_id:1,
          action_name:'start project',
          action_description: 'fork and clone repo into your local machine',
          notes: 'use the new method of creating a new branch not into the master'
        },
        {
          project_id:1,
          action_name: 'install yarn depend',
          action_description: 'install yarn and all its dependencies and create a server for a developor enviroment',
          notes: 'make sure to yarn init --y first'
        },
        {
          project_id:1,
          action_name:'build out RESTful functionality',
          action_description: 'build out the end points',
          notes: 'only make the POST project, POST action, and GET project'
        }

      ]);
    });
};
