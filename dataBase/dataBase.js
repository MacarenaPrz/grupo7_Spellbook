let fs = require('fs');


module.exports = {
    product: JSON.parse(fs.readFileSync('product.json', 'utf-8')),
    user: JSON.parse(fs.readFileSync('user.json', 'utf-8')),
    
}