const { Router } = require('express');
const { courses, teachers, reviews } = require('./data');

const router = Router();

router.get('/', (req, res) => {

	res.render('courses', {
		title: 'Программы повышения квалификации',
		description: 'Создание приверженного покупателя, анализируя результаты рекламной кампании, переворачивает жизненный цикл продукции.',
		script: 'courses.js',
		headerTitle: 'Образовательные программы',
		courses: courses.filter(course => course.type === 'Повышение квалификации'),
		teachers,
		reviews,
		specialOffer:false,
	});
});

module.exports = router;