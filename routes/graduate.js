const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
	res.render('graduate', {
		title: 'Аспирантура ГПНТБ СО РАН',
		script: 'graduate.js',
		headerTitle: 'Образовательные программы',
	});
});

module.exports = router;
 