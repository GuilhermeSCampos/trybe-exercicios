const validateName = (req, _res, next) => {
  if ('name' in req.body) {
    const { name } = req.body;
    name.length > 3 ? next() : next({ "message": "O campo name deve ter pelo menos 4 caracteres" })
  } else {
    next({ "message": "O campo name é obrigatório" });
  }
}

module.exports = validateName;
