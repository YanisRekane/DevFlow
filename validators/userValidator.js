const { body } = require('express-validator');

const validateUser = [
    body('email').isEmail().withMessage('Invalid email'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters'),
  ]
module.exports = {validateUser}