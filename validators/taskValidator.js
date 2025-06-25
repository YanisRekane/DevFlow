const { body } = require('express-validator');

const validateTask = [
  body('title').notEmpty().withMessage('Task title is required'),
  body('status')
    .optional()
    .isIn(['todo', 'in-progress', 'done'])
    .withMessage('Invalid status'),
  body('projectId').isInt().withMessage('projectId must be an integer'),
];

module.exports = {validateTask}