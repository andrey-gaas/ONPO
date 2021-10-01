const { Router } = require('express');
const Mongo = require('./../db');
const router = Router();

router.get('/', (req, res) => {

	Mongo
		.courses
		.find({})
		.toArray((error, courses) => {
			if (error) {
				console.log(error.message);
				console.log('Ошибка в /catalog');
				return res.redirect('/error?code=500');
			}

			const formRaioChekboxList = courses.map(item => ({title:item.title, id: item.id,}));

			res.render('catalog', {
				title: 'Каталог образовательных программ',
				script: 'catalog.js',
				headerTitle: 'Образовательные программы',
				courses,
				formRaioChekboxList,
			});
		});
});

module.exports = router;
