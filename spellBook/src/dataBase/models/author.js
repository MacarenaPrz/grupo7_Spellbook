module.exports = (sequelize,dataTypes) => {
    let alias = "Authors"

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
        }
    }
    let config = {
        tableName: "authors",
        timestamps: false
    }

    const Authors = sequelize.define(alias,cols,config)

    Authors.associate = models => {
        Authors.hasMany(models.Book,{
            as:"books",
            foreignKey:"author_id"
        })
    }

    return Authors
}