module.exports = (req, res, next) => {
    res.locals.inLogged = false;//Creo la variable local que va a estar en toda la app.
    let userCookie = req.cookies.logSpellbook// Creo una variable con el valor de la cookie que se guarda cuando se tilda el recorda usuario

    if (userCookie){                    //Si la cookie existe
        req.session.userLog = userCookie //La pongo en sesion asignandola como valor de session
    }

    if(req.session.userLog) {           //Si hay alguien en session
        res.locals.inLogged = true;     // la variable local va ser true y
        res.locals.userLog = req.session.userLog    // creo otra variable den locals con los datos del ususario en sesion
    }     
    next(); 
}