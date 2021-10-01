const { Router } = require('express');
const Mongo = require('./../db');

const router = Router();

router.get('/', (req,  res) => {

	Mongo.education
		.collection('reviews')
		.find({})
		.toArray((error, reviews) => {
			if (error) {
				console.log(error.message);
				console.log('Ошибка в /reviews');
				return res.redirect('/error?code=500');
			}
			
			res.render('reviews', {
				title: 'Отзывы',
				script: 'reviews.js',
				headerTitle: 'Отзывы',
				reviews,
			});
		});

	
});

module.exports = router;
 