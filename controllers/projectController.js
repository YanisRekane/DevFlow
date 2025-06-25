const {Project, User, Task} = require ('../models');

const getAllProjects = async(req, res) => {
    try{
        const projects = await Project.findAll({
            include: [
                { 
                    model: User, 
                    attributes: ['id', 'username'] 
                },
                {
                    model : Task
                }
            ]
        })
        res.json(projects);
    } catch (err){
        res.status(400).json({error : err.message});
    }
}

const createProject = async(req, res) => {
    try{
        const {name, ownerId} = req.body;

        //validate that user exists
        const user = await User.findByPk(ownerId);
        if (!user) {
          return res.status(404).json({ error: 'User not found' });
        }

        const project = await Project.create({name, ownerId});
        res.status(201).json(project);
    } catch(err){
        res.status(400).json({error: err.message});
    }
}

const getProject = async(req, res) => {
    const {id} = req.params;
    try{
        const project = await Project.findByPk(id, {
            include: [
                {
                    model: User,
                    as : 'owner',
                    attributes : ['id', 'username']
                },
                {
                    model : Task
                }
            ]
        })

        if (!project) return res.status(404).json({error: 'project not found'});
        res.json(project);
    } catch(err) {
        res.status(500).json({error : err.message});
    }
}

module.exports = {getAllProjects, createProject, getProject}