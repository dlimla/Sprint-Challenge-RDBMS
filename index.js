const express = require('express');

const helmet = require('helmet');

const db = require('./data/dbHelpers.js')


const server = express();

server.use(helmet());
server.use(express.json());

const port = 4000;

server.get('/api/projects', async(req, res) => {
    try {
        const projects = await db.findProjects();
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json(error)
    }
})

server.get('/api/projects/:id', async(req, res) => {
    const projectID = req.params.id;
    try {
        const project = await db.getProjectsWithActions(projectID);
        res.status(200).json(project)
    } catch (error) {
        res.status(500).json(error)
    }
})


server.get('/api/actions', async(req, res)=> {
    try {
        const actions = await db.findActions();
        res.status(200).json(actions)
    } catch (error) {
        res.status(500).json(error)
    }
})



server.post('/api/projects', async(req, res) => {
    const newProject = req.body
    try {
        const project = await db.insertProject(newProject);
        res.status(200).json(project)
    } catch(error) {
        res.status(500).json(error)
    }
})

server.post('/api/action', async(req, res) => {
    const newAction = req.body;
    try {
        const action = await db.insertAction(newAction);
        res.status(200).json(action)
    } catch(error) {
        res.status(500).json(error)
    }
})






server.listen(port, () => 
    console.log(`\running on ${port}\n`)
)