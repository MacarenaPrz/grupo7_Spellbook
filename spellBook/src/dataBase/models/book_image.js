module.exports = (sequelize,dataTypes) => {
    let alias = "Book_Image"

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
        tablename: "book_images",
        timestamps: false
    }
    const Book_Image = sequelize.define(alias,cols,config)

    Book_Image.associate = models => {
        Book_Image.belongsTo(models.Books,{
            as:"books",
            foreignKey:"image_id"
        })
    }

    return Book_Image

} 