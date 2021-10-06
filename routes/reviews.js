const { Router } = require('express');
const ReviewApi = require('../services/Review');

const router = Router();

router.get('/', async (req,  res) => {
	try {
		const reviews = await ReviewApi.get({});

		res.render('reviews', {
			title: 'Отзывы',
			script: 'reviews.js',
			headerTitle: 'Отзывы',
			reviews,
		});
	} catch (error) {
		console.log(error.message);
		console.log('Ошибка в /reviews');
		return res.redirect('/error?code=500');
	}
});

module.exports = router;
 