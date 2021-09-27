module.exports = (sequelize,dataTypes) => {
    let alias = "Favorites"

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
        user_id:{
            type: dataTypes.INTEGER(11).UNSIGNED, 
            allowNull: false
        }
    }
    let config = {
        tablename: "favorite",
        timestamps: false
    }

    const Favorites = sequelize.define(alias,cols,config)

    Favorites.associate = models => {
        Favorites.belongsTo(models.Books,{
            as:"books",
            foreignKey:"book_id"
        })
        Favorites.belongsTo(models.Users,{
            as:"users",
            foreignKey:"user_id"
        })
    
    }

    return Favorites

}    