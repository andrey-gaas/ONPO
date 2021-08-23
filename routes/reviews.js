const { Router } = require('express');
const { courses, teachers, reviews } = require('./data');

const router = Router();

router.get('/', (req,  res) => {

	res.render('reviews', {
		title: 'Отзывы',
		script: 'reviews.js',
		headerTitle: 'Отзывы',
		reviews,
	});
});

module.exports = router;
 