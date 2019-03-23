const knex = require('knex');
const dbConfig = require('../knexfile.js')

const db = knex(dbConfig.development);

module.exports = {
    findProjects: () => {
        return db('projects')
    },


    insertProject: (project) => {
        return db('projects')
        .insert(project)
        .then(([id]) => this.get(id))
    }


}