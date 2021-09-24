const { Router } = require('express');
const { courses, teachers, reviews } = require('./data');

const router = Router();

router.get('/', (req, res) => {

	res.render('courses', {
		title: 'Программы профессиональной переподготовки',
		description: 'Создание приверженного покупателя, анализируя результаты рекламной кампании, переворачивает жизненный цикл продукции.',
		script: 'courses.js',
		headerTitle: 'Образовательные программы',
		courses: courses.filter(course => course.type === 'Профессиональная переподготовка'),
		teachers,
		reviews,
		specialOffer:{
			title:'Специальное предложение до конца октября 2021!',
			text:'Успей получить новую профессию до конца года',
			link:'/course/1',
		},
	});
});

module.exports = router;
 