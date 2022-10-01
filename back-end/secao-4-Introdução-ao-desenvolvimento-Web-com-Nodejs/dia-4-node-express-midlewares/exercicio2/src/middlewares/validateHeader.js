const validateHeader = (req, res, next) => {
    const token = req.header('Authorization')
    if (token) {
        console.log('token');
        token.length === 16 ? next() : next({ "message": "Token inválido!" })
    } else {
        next({ "message": "Token inválido!" });
    }
};

module.exports = validateHeader;