const express = require('express');
const router = express.Router();
const validate = require('../middleware/validate'); 
const {createTask, getAllTasks, getTask} = require('../controllers/taskController')
const {validateTask} = require('../validators/taskValidator')

router.post('/', validateTask,validate, createTask)

router.get('/', getAllTasks)

router.get('/:id', getTask)

module.exports = router;