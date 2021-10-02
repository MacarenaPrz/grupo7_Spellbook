module.exports = (sequelize,dataTypes) => {
    let alias = "Stock"

    let cols = {
        id:{
            type: dataTypes.INTEGER(11).UNSIGNED, //unsigned significa que no va permitir valores negativos
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        book_id:{
            type: dataTypes.INTEGER(11).UNSIGNED, 
            allowNull: false
        },
        stock:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }
    let config = {
        tablename: "stocks",
        timestamps: false
    }

    const Stock = sequelize.define(alias,cols,config)

    /* Stock.associate = models => {
        Stock.belongsTo(models.Books,{
            as:"books",
            foreignKey:"book_id"
        })
    } */

    return Stock

}