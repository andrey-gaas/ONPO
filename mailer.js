const mailer = require('nodemailer');

const transporter = mailer.createTransport({
  host: 'webproxy.gpntbsib.ru',
  port: 25,
});

module.exports = function(data, html) {
  return new Promise((resolve, reject) => {

    const mailConfig = {
      from: { name: 'Отдел непрерывного профессионального образования ГПНТБ СО РАН', address: 'ONPO.office@gpntbsib.ru' },
      to: data.email,
      subject: data.subject,
      text: data.text,
      html: html ? html : `<p>${data.text}</p>`,
      attachments: data.attachments
    };

    transporter.sendMail(mailConfig, function(err, info) {
      if(err) reject(err);
      if(info) {
        if(info.rejected.length > 0) {
          reject('bad email');
        } else {
          resolve(info.messageId);
        }
      }
    });
  });
};