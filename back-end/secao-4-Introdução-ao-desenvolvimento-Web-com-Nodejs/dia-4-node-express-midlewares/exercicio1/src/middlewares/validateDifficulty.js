const validateDifficulty = (req, res, next) => {
    const segredo = ["Fácil", 'Médio', 'Difícil']
    const { description: { difficulty }} = req.body;
    if(segredo.some((e) => e === difficulty)) {
        next();
    } else {
        next({ "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" });
    }
}

module.exports = validateDifficulty