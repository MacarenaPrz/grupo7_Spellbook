module.exports = (sequelize,dataTypes) => {
    let alias = "Book"

    let cols = {
        id:{
            type: dataTypes.INTEGER(11), 
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        title:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        author_id:{
            type: dataTypes.INTEGER(11),
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
            type: dataTypes.TEXT,
            allowNull: false
        },
        image:{
            type: dataTypes.STRING(100),
            allowNull: false
        },
        recommended_age_id:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        publisher:{
            type: dataTypes.STRING(50),
            allowNull: false
        },
        language:{
            type: dataTypes.STRING(20),
            allowNull: false
        },
        publication_year:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        },
        pages:{
            type: dataTypes.INTEGER(11),
            allowNull: false
        }
    }

    let config = {
        tableName: "books",
        timestamps: false
    }

    const Books = sequelize.define(alias,cols,config)

    Books.associate = models => {
        Books.belongsTo(models.Authors, {
            as: 'author',
            foreignKey: 'author_id'
        })
        Books.belongsTo(models.RecommendedAges, {
            as: 'recommended_age',
            foreignKey: 'recommended_age_id'
        })
    }
 
    return Books

}   