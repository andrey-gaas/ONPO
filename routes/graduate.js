const PagesApi = require('../services/Pages');

const { Router } = require('express'); 
const router = Router();

router.get('/', async (req, res) => {
	const graduate = await PagesApi.getOne('graduate')

	res.render('graduate', {
		graduate,
		title: 'Аспирантура ГПНТБ СО РАН',
		script: 'graduate.js',
		headerTitle: 'Образовательные программы',
	});
});

module.exports = router;
 