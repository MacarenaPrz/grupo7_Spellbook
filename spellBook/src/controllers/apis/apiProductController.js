const db = require('../../dataBase/models')


const getUrl = (req) => req.protocol + '://' + req.get('host') + req.originalUrl;


module.exports = {
    getAllBooks: (req, res) => {
        db.Book.findAll()
        .then(books => res.status(200).json({
            meta: {
                endpoint: getUrl(req),
                total: books.length
            },
            data: books
        }))
    }
}