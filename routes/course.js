const { Router } = require('express');
const { courses, teachers, reviews } = require('./data');

const router = Router();

router.get('/:id', (req, res) => {
	const course = courses.find(course => course.id === +req.params.id);
	const type = course.type === 'Повышение квалификации' ?
		'Программы повышения квалификации' : 'Программы профессиональной переподготовки';

	res.render('course', {
		title: course.title,
		type,
		script: 'course.js',
		headerTitle: 'Образовательные программы',
		course,
	});
});

module.exports = router;
 