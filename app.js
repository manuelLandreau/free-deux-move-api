const express = require('express');
const logger = require('morgan');
const cors = require('cors')
require('dotenv').config()

const app = express();

// noinspection JSCheckFunctionSignatures
app.use(cors({ origin: process.env.ORIGIN_URL }))
// noinspection JSCheckFunctionSignatures
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', require('./routes'));

module.exports = app;

