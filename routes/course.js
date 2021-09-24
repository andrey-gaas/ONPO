const { Router } = require('express');
const { courses, teachers, reviews } = require('./data');

const router = Router();

router.get('/:id', (req, res) => {
	const course = courses.find(course => course.id === +req.params.id);

	const type = course.type === 'Повышение квалификации' ? 'Программы повышения квалификации' : 'Программы профессиональной переподготовки';
	const documentImage =  course.type === 'Повышение квалификации' ? '1.png' : '2.png';

	let rev = []
	for(let review of reviews){
		if(course.reviews.includes(review.id) ){
			rev.push(review)
		}
	}
	if(rev.length === 0){
		rev = [reviews[7], reviews[22], reviews[11], reviews[4]]
	}

	
	let teach = []
	for(let teacher of teachers){
		if(course.teachers.includes(teacher.id) ){
			teach.push(teacher)
		}
	}
	if(teach.length === 0){
		teach = [teachers[1],teachers[0], teachers[2], teachers[3]]
	}

	res.render('course', {
		title: course.title,
		type,
		script: 'course.js',
		headerTitle: 'Образовательные программы',
		course,
		teachers: teach,
		reviews: rev,
		documentImage,
	});
});

module.exports = router;