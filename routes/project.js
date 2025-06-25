const express = require('express');
const router = express.Router();
const validate = require('../middleware/validate'); 
const {validateProject} = require('../validators/projectValidator');
const {getAllProjects, createProject, getProject } = require('../controllers/projectController')

router.get('/', getAllProjects)

router.post('/', validateProject, validate, createProject)

router.get('/:id', getProject)

module.exports = router;