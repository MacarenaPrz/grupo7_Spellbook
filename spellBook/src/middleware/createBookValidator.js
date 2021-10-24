const { body } = require('express-validator');
const db = require('../dataBase/models');

module.exports = [
   body('titulo')
    .notEmpty().withMessage('Te olvidaste poner un título'),
   body('autor')
    .notEmpty().withMessage('Te olvidaste elegir un autor'),
   body('cantidad')
    .notEmpty().withMessage('Te olvidaste poner una cantidad'),
   body('precio')
    .notEmpty().withMessage('Tiene que tener un precio'),
   body('recommended_age')
    .notEmpty().withMessage('Elige una edad recomendada'),
   body('publisher')
    .notEmpty().withMessage('Te olvidaste completar la editorial'),
   body('lenguage')
    .notEmpty().withMessage('Te olvidaste completar con un lenguaje'),
   body('publication_year')
    .notEmpty().withMessage('Te olvidaste llenar el año de edición'),
   body('pages')
    .notEmpty().withMessage('¿Cuantas páginas tiene?'),
   body('descripcion')
    .notEmpty().withMessage('Completa con la sinopsis del libro'),

]