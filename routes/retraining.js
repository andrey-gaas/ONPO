const { Router } = require('express');
const Mongo = require('../db');

const router = Router();

router.get('/', (req, res) => {
	// Получаем список курсов
	Mongo
		.courses
		.find({ type: 'Профессиональная переподготовка' })
		.toArray((error, courses) => {
			if (error) {
				console.log(error.message);
				console.log('Ошибка в /training при загрузке списка курсов');
				return res.redirect('/error?code=500');
			}

			const formRaioChekboxList = courses.map(course => ({ title:course.title, id: course.id }));

			// Список преподавателей
			Mongo
				.teachers
				.find({})
				.toArray((error, teachers) => {
					if (error) {
						console.log(error.message);
						console.log('Ошибка в /training при загрузке преподавателей');
						return res.redirect('/error?code=500');
					}

					// Список отзывов
					Mongo
						.reviews
						.find({})
						.toArray((error, reviews) => {
							if (error) {
								console.log(error.message);
								console.log('Ошибка в /training при загрузке отзывов');
								return res.redirect('/error?code=500');
							}

							

							res.render('courses', {
								title: 'Программы профессиональной переподготовки',
								script: 'courses.js',
								headerTitle: 'Образовательные программы',
								courses,
								teachers,
								reviews,
								formRaioChekboxList,

								specialOffer:{
									title:'Специальное предложение до конца октября 2021!',
									text:'Успей получить новую профессию до конца года',
									link:'/course/0',
								},
							});
						});
				});
		});
});

module.exports = router;