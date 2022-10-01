const express = require('express');
const apiCredentials = require('./middlewares/apiCredentials');
const generateToken = require('./generateToken')
const validateHeader = require('./middlewares/validateHeader')

const app = express();

app.use(express.json());

app.post('/signup', apiCredentials, validateHeader, (_req, res) => {
    const token = generateToken();
    res.status(200).json({ token });
})

app.post('/activities', )

app.use((err, _req, res, _next) => {
    res.status(401).json(err)
})


module.exports = app;