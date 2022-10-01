const validatePrice = (req, res, next) => {
    if('price' in req.body) {
        const { price } = req.body;
        typeof price === 'number' && price >= 0 ? next() : next({ "message": "O campo price deve ser um número maior ou igual a zero" });
    } else {
        next({ "message": "O campo price é obrigatório" });
    }
}

module.exports = validatePrice;