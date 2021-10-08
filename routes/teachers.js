const { Router } = require('express');
const TeacherApi = require('../services/Teacher');

const router = Router();

router.get('/', async (req, res) => {
	try {
		const teachers = await TeacherApi.get({});

		res.render('teachers', {
			title: 'Преподаватели',
			script: 'teachers.js',
			headerTitle: 'Преподаватели',
			teachers,
		});
	} catch(error) {
		console.log(error.message);
		console.log('Ошибка в /teachers');
		return res.redirect('/error?code=500');
	}
});

router.get('/:id', async (req, res) => {
	const id = +req.params.id;

	try {
		const teacher = await TeacherApi.getOne(id);

		if (!teacher) {
			return res.redirect('/error?code=404');
		}

		res.render('teacher', {
			title: `${teacher.surname} ${teacher.name} ${teacher.middlename}`,
			script: 'teacher.js',
			headerTitle: 'Преподаватели',
			teacher,
		});
		
	} catch (error) {
		console.log(error.message);
		console.log('Ошибка в /teachers/:id');
		return res.redirect('/error?code=500');
	}
});

module.exports = router;