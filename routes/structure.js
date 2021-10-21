const PagesApi = require('../services/Pages');

const { Router } = require('express'); 
const router = Router();

router.get('/', async (req,  res) => {
	
	try {
		const structure = await PagesApi.getOne('structure')
		const { organizators } = await PagesApi.getOne("home")
		res.render('structure', {
			structure,
			organizators,
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
 