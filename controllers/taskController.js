const {User, Project, Task} = require('../models');

const createTask = async(req, res) => {
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
}

const getAllTasks = async(req, res) => {
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
}

const getTask =  async(req, res) => {
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
}

const getTasksByProject = async (req, res) => {
  try {
    const tasks = await Task.findAll({ where: { projectId: req.params.projectId } });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

const updateTask = async (req, res) => {
    try{
        const task = await Task.findByPk(req.params.id)
        if (!task) return res.status(404).json({error: 'Task not found'});

        await task.update(req.body);
        res.json(task)
    } catch (err) {
        res.status(500).json({error : 'server error'});
    }
}

const deleteTask = async (req, res) => {
    try{
        const task = await Task.findByPk(req.params.id)
        if (!task) return res.status(404).json({error: 'Task not found'})

        await task.destroy();
        res.json('task deleted')
    } catch (err) {
        res.status(500).json({error: err.message})
    }
}

module.exports = {getAllTasks, createTask, getTask, getTasksByProject, updateTask, deleteTask}