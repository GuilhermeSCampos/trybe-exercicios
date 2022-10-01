const validateCreatedAt = (req, res, next) => {
    const regExDate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/i
    const { description: {createdAt} } = req.body
    if (regExDate.test(createdAt)) {
        next();
    } else {
        next({ "message": "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" })
    }
    
}

module.exports = validateCreatedAt;