const express = require('express');
const logger = require('morgan');
const cors = require('cors')

const app = express();
const router = express.Router();

// noinspection JSCheckFunctionSignatures
app.use(cors({ origin: process.env.ORIGIN_URL }))
// noinspection JSCheckFunctionSignatures
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router.get('/', (req, res) => res.json({ status: 'ok' })));

module.exports = app;

