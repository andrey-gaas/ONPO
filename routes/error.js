const { Router } = require('express');

const router = Router();

router.get('/', (req,  res) => {

  let error = {
    code:404,
    text:"Страница не найдена",
    description:"Страница, на которую вы перешли, не существует. Возможно она была перенесена или ещё не создана.",
  }
  const errorCode = req.params.code

	res.render('error', {
		title: 'Ошибка',
		script: 'error.js',
		headerTitle: 'Кажется что-то пошло не так',
    error
	});
});

module.exports = router;