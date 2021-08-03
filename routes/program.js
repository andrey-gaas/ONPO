const { Router } = require('express');

const router = Router();

router.get('/catalog', (req, res) => {
	res.render('catalog', {
		title: 'Каталог программ',
		script: '/catalog.js',
	});
});

module.exports = router;
 