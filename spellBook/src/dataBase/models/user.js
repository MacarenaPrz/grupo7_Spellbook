module.exports = (sequelize,dataTypes) => {
    let alias = "Users"

    let cols = {
        id:{
            type: dataTypes.INTEGER(11).UNSIGNED, //unsigned significa que no va permitir valores negativos
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: dataTypes.STRING(50),
            allowNull: false
        },
        last_name:{
            type: dataTypes.STRING(50),
            allowNull: true
        },
        email:{
            type: dataTypes.STRING(50),
            allowNull: false
        },
        country:{
            type: dataTypes.STRING(50),
            allowNull: true
        },
        password:{
            type: dataTypes.STRING(70),
            allowNull: false
        },
        birthday:{
            type: dataTypes.DATEONLY,
            allowNull: true
        },
        avatar:{
            type: dataTypes.STRING(100),
            allowNull: true
        },
        rol:{
            type: dataTypes.STRING(10),
            allowNull: false
        },
        shopping_id:{
            type: dataTypes.INTEGER(11),
            allowNull: true
        }
    }
    let config = {
        tablename: "users",
        timestamps: false
    }

    const Users = sequelize.define(alias,cols,config)

    Users.associate = models => {
        Users.belongsTo(models.Favorites,{
            as:"favorite",
            foreignKey:"user_id"
        })
        Users.hasMany(models.Carts,{
            as:"carts",
            foreignKey:"user_id"
        })
    }

    return Users

}   