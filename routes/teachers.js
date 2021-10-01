const { Router } = require('express');
// const { courses, teachers, reviews } = require('./data');
const Mongo = require('./../db');

const router = Router();

router.get('/', (req,  res) => {
	Mongo.education
		.collection('teachers')
		.find({})
		.toArray((error, teachers) => {
			if (error) {
				console.log(error.message);
				console.log('Ошибка в /teachers');
				return res.redirect('/error?code=500');
			}

			res.render('teachers', {
				title: 'Преподаватели',
				script: 'teachers.js',
				headerTitle: 'Преподаватели',
				teachers,
			});
    });
});

router.get('/:id', (req, res) => {
	const id = +req.params.id;
	Mongo.education
		.collection('teachers')
		.findOne({ id })
		.then(teacher => {
			if (!teacher) {
				return res.redirect('/error?code=404');
			}

			res.render('teacher', {
				title: `${teacher.surname} ${teacher.name} ${teacher.middlename}`,
				script: 'teacher.js',
				headerTitle: 'Преподаватели',
				teacher,
			});
		})
		.catch(error => {
			console.log(error.message);
			console.log('Ошибка в /teachers');
			return res.redirect('/error?code=500');
		});
});

module.exports = router;