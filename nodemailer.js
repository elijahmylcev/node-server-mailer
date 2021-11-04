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