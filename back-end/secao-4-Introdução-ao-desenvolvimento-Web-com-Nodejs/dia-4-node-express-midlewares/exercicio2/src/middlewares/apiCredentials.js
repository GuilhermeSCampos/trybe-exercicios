const keys = ['email', 'password', 'firstName','phone'];

const apiCredentials = (req, res, next) => {
    if (keys.every((e) => e in req.body)) {
        console.log('api');
        next()
    } else {
        next({ "message": "Campos ausentes!" })
    }
}

module.exports = apiCredentials;