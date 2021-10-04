const { Router } = require('express');

const router = Router();

router.get('/', (req,  res) => {

  let error = {
    code:'---',
    text:"Непредвиденная ошибка",
    description:"Что-то сломалось.",
  }
  const errorCode = req.query.code
  
  if(+errorCode == 500){
    error = {
      code:500,
      text:"Ошибка сервера",
      description:"На сервере произошла непредвиденная ошибка. <br>Повторите запрос позже, если ошибка повторится сообщете об этом по почте. <br> email: begisheva@gpntbsib.ru",
    }
  }

  if(+errorCode == 404){
    error = {
      code:404,
      text:"Страница не найдена",
      description:"Страница, на которую вы перешли, не существует. <br>Возможно она была перенесена или ещё не создана.",
    }
  }

	res.render('error', {
		title: 'Ошибка',
		script: 'error.js',
		headerTitle: 'Кажется что-то пошло не так',
    error
	});
});

module.exports = router;