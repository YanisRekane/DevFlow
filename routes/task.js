const express = require('express');
const router = express.Router();
const validate = require('../middleware/validate'); 
const {createTask, getAllTasks, getTask, getTasksByProject, updateTask, deleteTask} = require('../controllers/taskController')
const {validateTask} = require('../validators/taskValidator')
const verifyToken = require ('../middleware/verifyToken');

router.post('/', verifyToken, validateTask,validate, createTask)

router.get('/', getAllTasks)

router.get('/:id', getTask)

router.get('/project/:projectId', getTasksByProject);

router.put('/:id', updateTask);

router.delete('/:id', deleteTask)

module.exports = router;