module.exports = (sequelize,dataTypes) => {
    let alias = "Purchase_Details"
    let cols = {
        id:{
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true           
        },
        book_id:{
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false
        },
        quantity:{
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false
        },
        total:{
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false
        },
        carts_id:{
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false
        }
    }
    let config = {
        tablename: "purchase_details",
        timestamps: false
    }
    const Purchase_Details = sequelize.define(alias,cols,config)

    /* Purchase_Details.associate = models => {
        Purchase_Details.hasMany(models.Carts,{
            as:"carts",
            foreignKey:"purchaseDetail_id"
        })
    } */

    return Purchase_Details
}