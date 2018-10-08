const express = require('express')
const app = express()
const path = require('path')

const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Test 5</h1>')
})

app.get('/testing', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

app.listen(port, () => console.log(`Server is on using port ${port}...`))