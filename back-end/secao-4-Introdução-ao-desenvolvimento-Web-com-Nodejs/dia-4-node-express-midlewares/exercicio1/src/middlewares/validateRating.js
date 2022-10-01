const validateRating = (req, res, next) => {
    const { description: { rating } } = req.body;
    if (typeof rating === 'number' && rating >= 1 && rating <= 5) {
        next();
    } else {
        next({ "message": "O campo rating deve ser um número inteiro entre 1 e 5" })
    }
}

module.exports = validateRating;