function notLogin (req, res, next) {
    if (req.session.userLog) {
        res.redirect('/user/profile')
    } else {        
        next()
    }
}

module.exports = notLogin;