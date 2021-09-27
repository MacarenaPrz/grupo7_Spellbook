module.exports = (sequelize,dataTypes) => {
    let alias = "Payments"

    let cols = {
        id:{
            type: dataTypes.INTEGER(11).UNSIGNED, //unsigned significa que no va permitir valores negativos
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: dataTypes.STRING(255),
            allowNull: false
        }
    }
    let config = {
        tablename: "payments",
        timestamps: false
    }

    const Payments = sequelize.define(alias,cols,config)

    Payments.associate = models => {
        Payments.hasMany(models.Carts,{
            as:"carts",
            foreignKey:"payment_id"
        })
    }

    return Payments

}    