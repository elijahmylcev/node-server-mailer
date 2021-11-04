const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mailer = require('./nodemailer');

const PORT = 3001;
let user = undefined;

app.use(bodyParser.urlencoded({
  extended: false
}))

app.post('/form', (req, res) => {

  if (!req.body.email || !req.body.text) return res.status(400);
  const message = {
    from: 'Mailer Test <collin.larkin7@ethereal.email>', //адрес почтового ящика, с которого отпровляется сообщение
    to: req.body.email, // адрес, на который будет отпраляться информация
    subject: 'Тема письма',
    text: `Поздравляю - все четко!
    
    Ваши данные:
    login: ${req.body.email},
    pass: ${req.body.pass}
    `
  }
  mailer(message);
  console.log(req.body);
  user = req.body;
  res.redirect('/form')
})

app.get('/form', (req, res) => {
  if (typeof user !== 'object') return res.sendFile(__dirname + '/form.html');

  res.send(`Ваше сообщение отправлено на email: ${user.email}`);

  user = undefined;
})

app.listen(PORT, () => {
  console.log(`server start --> at http://localhost:${PORT}/form`);
})