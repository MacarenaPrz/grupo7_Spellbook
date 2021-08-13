let fs = require('fs');


module.exports = {
    products: JSON.parse(fs.readFileSync('./src/dataBase/product.json', 'utf-8')),
    user: JSON.parse(fs.readFileSync('./src/dataBase/user.json', 'utf-8')),
    
}