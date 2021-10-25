const { body } = require('express-validator');
const db = require('../dataBase/models');

module.exports = [
   body('titulo').notEmpty().withMessage('Te olvidaste poner un título').bail(),
   body('autor').notEmpty().withMessage('Te olvidaste elegir un autor').bail(),
   body('cantidad').notEmpty().withMessage('Te olvidaste poner una cantidad').bail(),
   body('precio').notEmpty().withMessage('Tiene que tener un precio').bail(),
   body('recommended_age').notEmpty().withMessage('Elige una edad recomendada').bail(),
   body('publisher').notEmpty().withMessage('Te olvidaste completar la editorial').bail(),
   body('lenguage').notEmpty().withMessage('Te olvidaste completar con un lenguaje').bail(),
   body('publication_year').notEmpty().withMessage('Te olvidaste llenar el año de edición').bail(),
   body('pages').notEmpty().withMessage('¿Cuantas páginas tiene?').bail(),
   body('descripcion').notEmpty().withMessage('Completa con la sinopsis del libro').bail(),

]