const express = require('express');

const app = express();

const activities = [
    {
      id: 1,
      description: 'Banho no cachorro',
      status: 'A fazer',
    },
    {
      id: 2,
      description: 'Cortar a grama',
      status: 'A fazer',
    },
    {
      id: 3,
      description: 'Estudar JavaScript',
      status: 'Feito',
    },
  ];

app.listen(3001, () => console.log('running on port 3001'));

app.use(express.json());

app.get('/myActivities/:id', (req, res) => {
    const { id } = req.params;
    const activity = activities.find((e) => e.id === Number(id));
    res.status(200).json({...activity})
})

app.get('/myActivities', (_req, res) => {
    res.status(200).send(activities);
})

app.get('/filter/myActivities', (req, res) => {
    const { status } = req.query;
    console.log(status);
    let filteredActivities = [];
        if (status) {
      filteredActivities = activities.filter((activity) => activity.status === status);
    }
    console.log(filteredActivities);
    res.status(200).send(filteredActivities);
})

app.get('/search/myActivities', (req, res) => {
    const { q } = req.query;
    const keys = Object.keys(activities[1]);
    let searchedActivities = []

    if (q) {
        keys.forEach((e) => {
            const a = activities.filter((element) => element[e].toString().includes(q));
            console.log(a);
            searchedActivities = [...searchedActivities, ...a];
        })
    }

    res.status(200).send(searchedActivities);
})

module.exports = app;