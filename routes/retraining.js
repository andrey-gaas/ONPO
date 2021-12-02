const { Router } = require('express');
const CourseApi = require('../services/Course');
const TeacherApi = require('../services/Teacher');
const ReviewApi = require('../services/Review');

const router = Router();

router.get('/', async (req, res) => {
	try {
		const courses = await CourseApi.get({ type: 'Профессиональная переподготовка' });
		const reviews = await ReviewApi.get({});
		const teachers = await TeacherApi.get({});

		const formRaioChekboxList = courses.map(course => ({ title:course.title, id: course.id }));

		res.render('courses', {
			title: 'Программы профессиональной переподготовки',
			description: 'Создание приверженного покупателя, анализируя результаты рекламной кампании, переворачивает жизненный цикл продукции.',
			script: 'courses.js',
			headerTitle: 'Образовательные программы',
			courses,
			teachers,
			reviews,
			formRaioChekboxList,
			specialOffer: false,
		});
	} catch(error) {
		console.log(error.message);
		console.log('Ошибка в /retraining');
		return res.redirect('/error?code=500');
	}
});

module.exports = router;