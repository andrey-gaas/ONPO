const { Router } = require('express');
const sendMail = require('../../mailer');
const template = require('../../templates/application');
const router = Router();

const Mongo = require('../../db');

router.post('/application', (req, res) => {

  const message = {
    email: 'begisheva@gpntbsib.ru',
    subject: 'Заявка на обучение',
    text: ``,
  };

  const { name, email, phone, location, course, wishes } = req.body;

  Mongo
    .courses
    .findOne({id:+course})
    .then( result => {

      sendMail(message, template(name, email, phone, location, result.title, wishes))
        .then(() => {
          res.status(200).send({ success: true })
        })
        .catch(error => {
          console.log(error.message);
          console.log('ОШИБКА В "POST /application"');
          res.send({ success: false });
        });
    }).catch( error => {
      console.log(error.message);
      console.log('Ошибка в api/application');
      return res.redirect('/error?code=500');
    })

  
});

module.exports = router;