function userAdmin (req, res, next) {
    if (req.session.user.rol === "Admin") {
        next()
    } else {
        res.redirect('/')
    }
}

module.exports = userAdmin;