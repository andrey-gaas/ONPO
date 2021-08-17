const { Router } = require('express');
const { courses, teachers, reviews } = require('./data');

const router = Router();

router.get('/', (req, res) => {

	res.render('training', {
		title: 'Программы повышения квалификации',
		script: 'training.js',
		headerTitle: 'Образовательные программы',
		courses,
		teachers,
		reviews,
	});
});

module.exports = router;
 