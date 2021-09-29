const { Router } = require('express');
const { courses } = require('./data');
const router = Router();

router.get('/', (req, res) => {

	const formRaioChekboxList = courses.map( item => { return {title:item.title, id: item.id,} })

	res.render('catalog', {
		title: 'Каталог образовательных программ',
		script: 'catalog.js',
		headerTitle: 'Образовательные программы',
		courses,
		formRaioChekboxList,
	});
});

module.exports = router;
