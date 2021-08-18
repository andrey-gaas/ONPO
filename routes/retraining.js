const { Router } = require('express');
const { courses, teachers, reviews } = require('./data');

const router = Router();

router.get('/', (req, res) => {

	res.render('retraining', {
		title: 'Программы профессиональной подготовки',
		script: 'retraining.js',
		headerTitle: 'Образовательные программы',
		courses,
		teachers,
		reviews,
	});
});

module.exports = router;
 