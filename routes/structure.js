//const { structure } = require('./data');
const PagesApi = require('../services/Pages');

const { Router } = require('express'); 
const router = Router();

console.log(PagesApi.getOne);

router.get('/', async (req,  res) => {
	
	try {
		const structure = await PagesApi.getOne('structure')
		res.render('structure', {
			structure,
			title: 'Отдел непрерывного профессионального образования',
			script: 'structure.js',
			headerTitle: 'Cведения о структурном подразделении',
		});
	} catch (error) {
		console.log(error.message);
		console.log('Ошибка в /structure');
		return res.render('/error?code=500');
	}
});

module.exports = router;
 