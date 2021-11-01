const express = require('express');
const bodyParser = require('body-parser');
const app = express()

const PORT = 3001;

app.use(bodyParser.urlencoded({extended: false}))

app.post('/form', (req,res)=> {
    console.log(req.body);
})

app.get('/form', (req, res) => {
    res.sendFile(__dirname + '/form.html')
})

app.listen(PORT, () => {
    console.log(`server start --> at http://localhost:${PORT}/form`);
})