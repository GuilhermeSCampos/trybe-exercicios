// src/app.js
const fs = require('fs');
const express = require('express');
const cacaoTrybe = require('./cocoaTrybe');

const app = express();

app.use(express.json());

app.get('/chocolates', async (_req, res) => {
  const chocolates = await cacaoTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async (_req, res) => {
    const chocolates  = await cacaoTrybe.getAllChocolates();
    const totalChocolates = chocolates.length;
    res.status(200).json({totalChocolates})
})

app.get('/chocolates/search', async (req, res) => {
    const chocolates  = await cacaoTrybe.getAllChocolates();
    const { name } = req.query;
    const filtered = chocolates.filter((e) => e.name.includes(name));
    res.status(200).json(filtered);
})

app.put('/chocolates/:id', async (req, res) => {
    const { id } = req.params;
    console.log(req.params)
    const chocolates = await cacaoTrybe.getAllChocolates();
    console.log(req.body);
    const choco = chocolates.findIndex((e) => e.id === +id);
    const x = {...chocolates[choco], ...req.body}
    const teste = await cacaoTrybe.updateChoco(choco, req.body);
    console.log(teste);
    res.status(200).json({"chocolate": x});
})

// app.put('/chocolates/:id', async (req, res) => {
//     const { id } = req.params;
//     const { name, brandId } = req.body;
//     const updatedChocolate = await cacaoTrybe.updateChocolate(Number(id), { name, brandId });
  
//     if (updatedChocolate) return res.status(200).json({ chocolate: updatedChocolate });
//     res.status(404).json({ message: 'chocolate not found' });
//   });

app.listen(3001);

module.exports = app;