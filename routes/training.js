const { Router } = require('express');
const { courses, teachers, reviews } = require('./data');

const router = Router();

router.get('/', (req, res) => {
	const courseValid = courses.filter(course => course.type === 'Повышение квалификации')
	const formRaioChekboxList = courseValid.map(course => ({title:course.title, id: course.id}) )

	res.render('courses', {
		title: 'Программы повышения квалификации',
		description: 'Создание приверженного покупателя, анализируя результаты рекламной кампании, переворачивает жизненный цикл продукции.',
		script: 'courses.js',
		headerTitle: 'Образовательные программы',
		courses: courseValid,
		teachers,
		reviews,
		formRaioChekboxList,
		specialOffer:false,
	});
});

module.exports = router;