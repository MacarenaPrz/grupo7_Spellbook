module.exports = (sequelize,dataTypes) => {
    let alias = "Users"

    let cols = {
        id:{
            type: dataTypes.INTEGER(11), 
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        country:{
            type: dataTypes.STRING(50),
            allowNull: false
        },
        password:{
            type: dataTypes.STRING(70),
            allowNull: false
        },
        birthday:{
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        avatar:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        rol:{
            type: dataTypes.STRING(50),
            allowNull: false
        },
      
    }

    let config = {
        tableName: "users",
        timestamps: false
    }

    const Users = sequelize.define(alias,cols,config)

    return Users

}   