module.exports = (sequelize,dataTypes) => {
    let alias = "Authors"

    let cols = {
        id:{
            type: dataTypes.INTEGER(11).UNSIGNED, //unsigned significa que no va permitir valores negativos
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
        tablename: "authors",
        timestamps: false
    }

    const Authors = sequelize.define(alias,cols,config)

    /* Authors.associate = models => {
        Authors.hasMany(models.Books_Authors,{
            as:"books_authors",
            foreignKey:"id_authors"
        })
    } */

    return Authors
}