const express = require('express');

const app = express()

const PORT = 3001;

app.get('/form', (req, res) => {
    res.send('Hello Server')
})

app.listen(PORT, () => {
    console.log(`server start at http://localhost:${PORT}/form`);
})