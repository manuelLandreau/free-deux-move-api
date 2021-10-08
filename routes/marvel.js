const express = require('express');
const router = express.Router();
const marvelService = require('../services/marvelService')

router.get('/:page?', function (req, res, next) {
    marvelService.getAll(req.params.page)
        .then(body => res.json(body))
        .catch(error => {
            console.log(error);
            res.status(500)
            res.send('Internal error');
        });
});

module.exports = router;
