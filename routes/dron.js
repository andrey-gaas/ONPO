const { Router } = require('express');
const fetch = require('node-fetch');

const router = Router();

router.get('/', (req, res) => {
    res.render('dron');
});

module.exports = router;
