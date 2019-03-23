const knex = require('knex');
const dbConfig = require('../knexfile.js')

const db = knex(dbConfig.development);

module.exports = {
    findProjects: () => {
        return db('projects')
    },

    findActions: () => {
        return db('actions')
    },

    insertProject: (project) => {
        return db('projects')
        .insert(project)
        .then(([id]) => this.get(id))
    },

    insertAction: (action) => {
        return db('actions')
        .insert(action)
        .then(([id]) => this.get(id))
    }
}