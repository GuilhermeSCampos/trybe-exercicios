const validateDescription = (req, res, next) => {
    if ('description' in req.body) {
        const { description } = req.body; 
        const descriptionKeys = ['createdAt', 'rating', 'difficulty'];
        descriptionKeys.forEach(element => {
            if (!(element in description)) {
                return next({ "message": `O campo ${element} é obrigatório` })
            }
        });
        next();
    } else {
        next({ "message": "O campo description é obrigatório" });
    }
}

module.exports = validateDescription;