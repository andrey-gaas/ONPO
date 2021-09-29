const { Router } = require('express');
const sendMail = require('../../mailer');
const template = require('../../templates/application');
const router = Router();
// const bodyParser = require('body-parser')
// const urlencodedParser = bodyParser.urlencoded({
//   extended: false,
// })

router.post('/application', (req, res) => {
  const message = {
    email: 'Gaas@gpntbsib.ru',
    subject: 'Заявка на обучение',
    text: `TEXT TEST`,
  };

  const { name, email, phone, location, course, wishes } = req.body;
  console.log(req.body);

  sendMail(message, template(name, email, phone, location, course, wishes))
    .then(() => res.redirect('/?application=success'))
    .catch(error => {
      console.log(error.message);
      res.redirect('/?application=fail');
    });
});

router.post('/application2', (req, res) => {
  console.log(req.body, 1);
});

module.exports = router;
