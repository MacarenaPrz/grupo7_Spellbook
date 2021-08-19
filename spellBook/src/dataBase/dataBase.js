let fs = require('fs');
const path = require('path');

module.exports = {
    products: JSON.parse(fs.readFileSync('./src/dataBase/product.json', 'utf-8')),
    user: JSON.parse(fs.readFileSync('./src/dataBase/user.json', 'utf-8')),
    writeProductsJSON: (dataBase) => {
        fs.writeFileSync(path.join(__dirname, "../dataBase/product.json"), JSON.stringify(dataBase), "utf-8")
    }
}