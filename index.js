const express = require('express');
const bodyParser = require('body-parser');
const app = express()

const PORT = 3001;
let user = undefined;

app.use(bodyParser.urlencoded({extended: false}))

app.post('/form', (req,res)=> {

    if (!req.body.email || !req.body.text) return res.status(400);
    
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