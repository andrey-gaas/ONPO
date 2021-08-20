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

module.exports = router;
 