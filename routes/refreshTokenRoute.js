const express = require('express');
const router = express.Router();
const refreshTokenHandler = require('../controllers/refreshTokenHandler');


router.post('/', refreshTokenHandler);

module.exports = router;
