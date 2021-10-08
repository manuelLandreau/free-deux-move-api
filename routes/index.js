const express = require('express');
const router = express.Router();
const marvel = require('./marvel.js');

router.use('/marvel', marvel);

module.exports = router;