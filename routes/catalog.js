const { Router } = require('express');
const CourseApi = require('../services/Course');
const router = Router();

router.get('/', async (req, res) => {
	try {
		const courses = await CourseApi.get({});

		const formRaioChekboxList = courses.map(item => ({title:item.title, id: item.id,}));

		res.render('catalog', {
			title: 'Каталог образовательных программ',
			script: 'catalog.js',
			headerTitle: 'Образовательные программы',
			courses,
			formRaioChekboxList,
		});
	} catch(error) {
		console.log(error.message);
		console.log('Ошибка в /catalog');
		return res.redirect('/error?code=500');
	}
});

module.exports = router;
