const { Router } = require('express');

const router = Router();

router.get('/', (req,  res) => {

	res.render('structure', {
		title: 'Отдел непрерывного профессионального образования',
		script: 'structure.js',
		headerTitle: 'Cведения о структурном подразделении',
	});
});

module.exports = router;
 