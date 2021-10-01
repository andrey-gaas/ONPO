const { Router } = require('express');
const sendMail = require('../../mailer');
const template = require('../../templates/application');
const router = Router();

router.post('/application', (req, res) => {

  const message = {
    email: 'Gaas@gpntbsib.ru',  // СЮДА EMAIL КУДА СЛАТЬ
    subject: 'Заявка на обучение',
    text: ``,
  };

  const { name, email, phone, location, course, wishes } = req.body;

  sendMail(message, template(name, email, phone, location, course, wishes))
    .then(() => {
      res.status(200).send({ success: true })
    })
    .catch(error => {
      console.log(error.message);
      console.log('ОШИБКА В "POST /application"');
      res.send({ success: false });
    });
});

module.exports = router;