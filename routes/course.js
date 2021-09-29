const { Router } = require('express');
const { courses, teachers, reviews } = require('./data');

const router = Router();

router.get('/:id', (req, res) => {
	const course = courses.find(course => course.id === +req.params.id);

	const type = course.type === 'Повышение квалификации' ? 'Программы повышения квалификации' : 'Программы профессиональной переподготовки';
	const document =  course.type === 'Повышение квалификации' ? 
	{	img:'1.png',text:'Удостоверение о повышении	квалификации установленного образца'} : {	img:'2.png',text:'Диплом о профессиональной переподготовке установленного образца '	};

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

	const formRaioChekboxList = [{title:course.title, id: course.id, checked: true}]

	res.render('course', {
		title: course.title,
		type,
		formRaioChekboxList,
		script: 'course.js',
		headerTitle: 'Образовательные программы',
		course,
		teachers: teach,
		reviews: rev,
		document
	});
});

module.exports = router;