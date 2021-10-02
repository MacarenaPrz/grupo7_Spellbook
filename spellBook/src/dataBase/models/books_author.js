module.exports = (sequelize,dataTypes) => {
    let alias = "Books_Authors"

    let cols = {
        id:{
            type: dataTypes.INTEGER(11).UNSIGNED, //unsigned significa que no va permitir valores negativos
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        id_books:{
            type: dataTypes.INTEGER(11).UNSIGNED, 
            allowNull: false
        },
        id_authors:{
            type: dataTypes.INTEGER(11).UNSIGNED, 
            allowNull: false
        }
    }
    let config = {
        tablename: "books_authors",
        timestamps: false
    }

    const Books_Authors = sequelize.define(alias,cols,config)

    /* Books_Authors.associate = models => {
        Books_Authors.belongsTo(models.Authors,{
            as:"authors",
            foreignKey:"id_authors"
        })
        Books_Authors.belongsTo(models.Books,{
            as:"books",
            foreignKey:"id_books"
        })
    } */

    return Books_Authors

}    