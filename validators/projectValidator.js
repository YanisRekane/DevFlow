const { body } = require('express-validator');

const validateProject =  [
        body('name').notEmpty().withMessage('Project name is required'),
        body('description').optional().isString(),
    ]

module.exports = {validateProject};