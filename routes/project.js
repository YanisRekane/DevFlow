const express = require('express');
const router = express.Router();
const validate = require('../middleware/validate'); 
const {validateProject} = require('../validators/projectValidator');
const {getAllProjects, createProject, getProject } = require('../controllers/projectController')
const verifyToken = require ('../middleware/verifyToken');

router.get('/', getAllProjects)

router.post('/', verifyToken, validateProject, validate, createProject)

router.get('/:id', getProject)

module.exports = router;