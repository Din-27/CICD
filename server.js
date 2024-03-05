const express = require('express')
const app = express()

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))
app.get('/home', (req, res) => res.status(200).send({ message: 'Hello World !' }))

module.exports = app