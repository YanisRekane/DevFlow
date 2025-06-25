const express = require('express');
const router = express.Router();
const {User, Project, Task} = require('../models');

router.post('/', async(req, res) => {
    try{
        const {title, description, status, due, projectId, assigneeId} = req.body;

        //validate project exist
        const project = await Project.findByPk(projectId);
        if(!project) return res.status(404).json({error: 'project not found'});

        const task = await Task.create({
            title,
            description,
            status : status || 'todo',
            due,
            projectId,
            assigneeId
        })
        res.status(201).json(task);
    } catch(err){
        res.status(400).json({error: err.message});
    }
})

router.get('/', async(req, res) => {
    try{
        const task = await Task.findAll({
            include : [
                {
                    model: Project,
                    attributes: ['id', 'name']
                },
                {
                    model : User,
                    as : 'assignee',
                    attributes: ['id', 'username']
                }
            ]
        })
        res.json(task)
    } catch (err){
        res.status(500).json({error: err.message});
    }
})

router.get('/:id', async(req, res) => {
    const {id} = req.params;
    try{
        const task = await Task.findByPk(id, {
            include: [
                {
                    model: Project,
                    attributes : ['id', 'name']
                },
                {
                    model : User,
                    as: 'assignee',
                    attributes : ['id', 'username']
                }
            ]
        })

        if (!task) return res.status(404).json({ error: 'Task not found' });
        res.json(task)
    } catch(err) {
        res.status(500).json({error: err.message})
    }
})

module.exports = router;