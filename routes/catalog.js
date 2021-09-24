const { Router } = require('express');
const { courses } = require('./data');
const router = Router();

router.get('/', (req, res) => {

	res.render('catalog', {
		title: 'Каталог образовательных программ',
		script: 'catalog.js',
		headerTitle: 'Образовательные программы',
		courses,
	});
});

module.exports = router;
