const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email', //адрес для отправки email
  port: 587,//порт почтового сервера, с которого будет отправляться email
  secure: false,
  auth: {
    user: 'collin.larkin7@ethereal.email', //login
    pass: '5NnVJhTssurAga1jdU' //password
  }
});

const mailer = message => {
  transporter.sendMail(message, (err, info) => {
    if (err) return console.log(err);
    console.log(`Email sent: ${info}`);
  })
}

module.exports = mailer