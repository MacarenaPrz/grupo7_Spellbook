module.exports = (sequelize,dataTypes) => {
    let alias = "Books"

    let cols = {
        id:{
            type: dataTypes.INTEGER(11).UNSIGNED, //unsigned significa que no va permitir valores negativos
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        title:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        books_author:{
            type: dataTypes.INTEGER(11).UNSIGNED,
            allowNull: false
        },
        stock:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        price:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        description:{
            type: dataTypes.STRING(255),
            allowNull: true
        },
        image_id:{
            type: dataTypes.INTEGER(11),
            allowNull: true
        },
        recommendedAge_id:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        month_selection:{
            type: dataTypes.BOOLEAN,
            allowNull: true
        },
        publisher:{
            type: dataTypes.STRING(100),
            allowNull: true
        },
        lenguage:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        publication_year:{
            type: dataTypes.DATEONLY,
            allowNull: false
        },
        pages:{
            type: dataTypes.INTEGER(11),
            allowNull: true
        }
    }
    let config = {
        tablename: "books",
        timestamps: false
    }

    const Books = sequelize.define(alias,cols,config)

    Books.associate = models => {
        Books.hasMany(models.Book_Image,{
            as:"book_images",
            foreignKey:"image_id"
        })
        Books.belongsTo(models.Recommended_Ages,{
            as:"recommended_ages",
            foreignKey:"recommendedAge_id"
        })
        Books.belongsToMany(models.Users,{
            as:"users",
            through:"Favorites",
            foreignKey: "book_id",
            otherKey:"user_id",
            timestamps: false
        })
        Books.belongsToMany(models.Authors,{
            as:"authors",
            through:"Books_Authors",
            foreignKey: "books_author",
            otherKey:"id_authors",
            timestamps: false
        })
        Books.hasMany(models.Stock,{
            as:"stocks",
            foreignKey: "book_id"
        })
    }

    return Books

}   