const { Router } = require('express');
const { courses, teachers, reviews } = require('./data');

const router = Router();

router.get('/', (req, res) => {

	res.render('courses', {
		title: 'Программы профессиональной переподготовки',
		description: 'Создание приверженного покупателя, анализируя результаты рекламной кампании, переворачивает жизненный цикл продукции.',
		script: 'courses.js',
		headerTitle: 'Образовательные программы',
		courses,
		teachers,
		reviews,
	});
});

module.exports = router;
 