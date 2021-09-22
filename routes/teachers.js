const { Router } = require('express');
const { courses, teachers, reviews } = require('./data');

const router = Router();

router.get('/', (req,  res) => {

	res.render('teachers', {
		title: 'Преподаватели',
		script: 'teachers.js',
		headerTitle: 'Преподаватели',
		teachers,
	});
});

router.get('/:id', (req, res) => {
	const { id } = req.params;
	const teacher = teachers.find(t => t.id === +id);
	res.render('teacher', {
		title: `${teacher.surname} ${teacher.name} ${teacher.middlename}`,
		script: 'teacher.js',
		headerTitle: 'Преподаватели',
		teacher,
	});
});

module.exports = router;