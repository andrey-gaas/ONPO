const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
	const courses = [
		{
			id: 0,
			title: 'Делопроизводство. Организация документирования управленческой деятельности в организации',
			stars: 5,
			reviews: [{}, {}, {}],
			type: 'Профессиональная переподготовка',
			discount: 'Скидка 40% до 14 сентября',
			start: '14 сентября 2021 года',
			hours: '16 часов',
			term: '3 месяца',
			price: '1599',
			image: 'https://cdnimg.rg.ru/img/content/186/45/44/iStock-949118068_d_850.jpg',
			categories:[ 'best', 're'],
		},
		{
			id: 0,
			title: 'Делопроизводство. Организация документирования управленческой деятельности в организации',
			stars: 5,
			reviews: [{}, {}, {}],
			type: 'Профессиональная переподготовка',
			discount: 'Скидка 40% до 14 сентября',
			start: '14 сентября 2021 года',
			hours: '16 часов',
			term: '3 месяца',
			price: '1599',
			image: 'https://cdnimg.rg.ru/img/content/186/45/44/iStock-949118068_d_850.jpg',
			categories:['asp',  're'],
		},
		{
			id: 0,
			title: 'Делопроизводство. Организация документирования управленческой деятельности в организации',
			stars: 5,
			reviews: [{}, {}, {}],
			type: 'Профессиональная переподготовка',
			discount: 'Скидка 40% до 14 сентября',
			start: '14 сентября 2021 года',
			hours: '16 часов',
			term: '3 месяца',
			price: '1599',
			image: 'https://cdnimg.rg.ru/img/content/186/45/44/iStock-949118068_d_850.jpg',
			categories:[ 'best', 'pop',],
		},
		{
			id: 0,
			title: 'Делопроизводство. Организация документирования управленческой деятельности в организации',
			stars: 5,
			reviews: [{}, {}, {}],
			type: 'Профессиональная переподготовка',
			discount: 'Скидка 40% до 14 сентября',
			start: '14 сентября 2021 года',
			hours: '16 часов',
			term: '3 месяца',
			price: '1599',
			image: 'https://cdnimg.rg.ru/img/content/186/45/44/iStock-949118068_d_850.jpg',
			categories:['asp', 'best', ],
		},
		{
			id: 1,
			title: 'Организация библиотечно-информационного обслуживания инвалидов и лиц с ОВЗ',
			stars: 5,
			reviews: [{}, {}],
			type: 'Повышение квалификации',
			discount: 'Скидка 40% до 14 сентября',
			start: '7 сентября 2021 года',
			hours: 'от 16 до 72 часов',
			term: 'от 2 дней до 2 недель',
			price: '2799',
			image: 'https://cdnimg.rg.ru/img/content/186/45/44/iStock-949118068_d_850.jpg',
			categories:['asp', 'up', 're'],
		}
	];

	res.render('catalog', {
		title: 'Каталог образовательных программ',
		script: 'catalog.js',
		headerTitle: 'Образовательные программы',
		courses,
	});
});

module.exports = router;
 