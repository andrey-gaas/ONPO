const { Router } = require('express');
const fetch = require('node-fetch');

const router = Router();

router.get('/', (req, res) => {
	res.render('sign-in', {
		layout: 'empty',
		title: 'Страница Андрея',
		script: 'sign-in.js',
	});
});

module.exports = router;
