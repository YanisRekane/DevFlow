const express = require('express');
const router = express.Router();
const validate = require('../middleware/validate'); 
const { getAllUsers, createUser } = require('../controllers/userController')
const {validateUser} = require('../validators/userValidator')

router.get('/', getAllUsers)

router.post('/', validateUser, validate, createUser)

module.exports = router;