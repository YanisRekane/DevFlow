const express = require('express');
const router = express.Router();
const validate = require('../middleware/validate'); 
const { getAllUsers, createUser, loginUser } = require('../controllers/userController')
const {validateUser} = require('../validators/userValidator')
const { validateLogin} = require('../validators/authValidator')

router.get('/', getAllUsers)

router.post('/login',validateLogin, validate, loginUser)

router.post('/register', validateUser, validate, createUser)

module.exports = router;