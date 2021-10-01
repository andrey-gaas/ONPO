const { Router } = require('express');
const Mongo = require('../db');

const router = Router();

router.get('/:id', (req, res) => {
	Mongo
		.courses
		.findOne({ id: +req.params.id })
		.then(course => {
			if (!course) {
				return res.redirect('/error?code=404');
			}

			const formRaioChekboxList = [{ title: course.title, id: course.id, checked: true }]
			const type = course.type === 'Повышение квалификации' ? 'Программы повышения квалификации' : 'Программы профессиональной переподготовки';
			const document =  course.type === 'Повышение квалификации' ? 
				{	img: '1.png', text: 'Удостоверение о повышении	квалификации установленного образца' }
				: {	img: '2.png', text: 'Диплом о профессиональной переподготовке установленного образца'	};

			// Загружаем список отзывов
			Mongo
				.reviews
				.find({
					'$or': course.reviews.map(id => ({ id }))
				})
				.toArray((error, reviews) => {
					if (error) {
						console.log(error.message);
						console.log('Ошибка в /course/:id при загрузке отзывов');
						return res.redirect('/error?code=500');
					}
					
					// Загружаем список преподавателей
					Mongo
						.teachers
						.find({
							'$or': course.teachers.map(id => ({ id }))
						})
						.toArray((error, teachers) => {
							if (error) {
								console.log(error.message);
								console.log('Ошибка в /course/:id при загрузке преподавателей');
								return res.redirect('/error?code=500');
							}
							
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
						});
				});
		})
		.catch(error => {
			console.log(error.message);
			console.log('Ошибка в /course/:id при загрузке курсов');
			return res.redirect('/error?code=500');
		});
});

module.exports = router;