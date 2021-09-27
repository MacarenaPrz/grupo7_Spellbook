module.exports = (sequelize,dataTypes) => {
    let alias = "PurchaseDetails"
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
        tablename: "purchasedetails",
        timestamps: false
    }
    const PurchaseDetails = sequelize.define(alias,cols,config)

    PurchaseDetails.associate = models => {
        PurchaseDetails.hasMany(models.Carts,{
            as:"carts",
            foreignKey:"purchaseDetail_id"
        })
    }

    return PurchaseDetails
}