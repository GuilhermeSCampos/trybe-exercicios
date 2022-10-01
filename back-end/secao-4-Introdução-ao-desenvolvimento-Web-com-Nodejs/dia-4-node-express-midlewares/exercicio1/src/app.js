const express = require('express');
const validateDescription = require('./middlewares/validateDescription');
const validateName = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateRating = require('./middlewares/validateRating');
const validateDifficulty = require('./middlewares/validateDifficulty');

const bosta = [validateName,
    validatePrice,
    validateDescription,
    validateCreatedAt,
    validateRating
    , validateDifficulty];

const app = express();

app.use(express.json());

app.post('/activities', bosta,  
(req, res) => {
    res.status(200).json({ "message": "Atividade cadastrada com sucesso!" })
})

app.use((err, _req, res, _next) => {
    console.log('entrou no erro');
    return res.status(400).json(err);
})

module.exports = app;
