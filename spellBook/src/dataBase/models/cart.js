module.exports = (sequelize,dataTypes) => {
    let alias = "Carts"

    let cols = {
        id:{
            type: dataTypes.INTEGER(11).UNSIGNED, //unsigned significa que no va permitir valores negativos
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        user_id:{
            type: dataTypes.INTEGER(11).UNSIGNED, 
            allowNull: false
        },
        purchaseDetail_id:{
            type: dataTypes.INTEGER(11).UNSIGNED, 
            allowNull: false
        },
        payment_id:{
            type: dataTypes.INTEGER(11).UNSIGNED, 
            allowNull: false
        }
    }
    let config = {
        tablename: "carts",
        timestamps: false
    }

    const Carts = sequelize.define(alias,cols,config)

    Carts.associate = models => {
        Carts.belongsTo(models.Payments,{
            as:"payments",
            foreignKey:"payment_id"
        })
        Carts.belongsTo(models.PurchaseDetails,{
            as:"purchasedetails",
            foreignKey:"purchaseDetail_id"
        })
        Carts.belongsTo(models.Users,{
            as:"users",
            foreignKey:"user_id"
        })
    }

    return Carts

}    