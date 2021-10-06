const { Router } = require('express');
const CourseApi = require('../services/Course');
const TeacherApi = require('../services/Teacher');
const ReviewApi = require('../services/Review');

const router = Router();

router.get('/:id', async (req, res) => {
	const id = +req.params.id;

	try {
		const course = await CourseApi.getOne(id);
		let reviews = [];

		if (!course) {
			return res.redirect('/error?code=404');
		}

		if (course.reviews.length) {
			const reviewsResult = await ReviewApi.get({ '$or': course.reviews.map(id => ({ id })) });
			reviews = [...reviewsResult];
		}
		const teachers = await TeacherApi.get({ '$or': course.teachers.map(id => ({ id })) });

		const formRaioChekboxList = [
			{ title: course.title, id: course.id, checked: true }
		];
		const type = course.type === 'Повышение квалификации' ?
		'Программы повышения квалификации' : 'Программы профессиональной переподготовки';
		const document =  course.type === 'Повышение квалификации' ? 
				{	img: '1.png', text: 'Удостоверение о повышении	квалификации установленного образца' }
				: {	img: '2.png', text: 'Диплом о профессиональной переподготовке установленного образца'	};

		

		res.render('course', {
			title: course.title,
			type,
			formRaioChekboxList,
			script: 'course.js',
			headerTitle: 'Образовательные программы',
			course,
			teachers,
			reviews,
			document
		});

	} catch(error) {
		console.log(error.message);
		console.log('Ошибка в /course/:id');
		return res.redirect('/error?code=500');
	}
});

module.exports = router;