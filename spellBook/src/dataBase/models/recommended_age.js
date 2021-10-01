module.exports = (sequelize,dataTypes) => {
    let alias = "RecommendedAges"

    let cols = {
        id:{
            type: dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        age:{
            type: dataTypes.STRING(10),
            allowNull: false
        }
    }
    let config = {
        tableName: "recommended_ages",
        timestamps: false
    }

    const RecommendedAges = sequelize.define(alias,cols,config)

    RecommendedAges.associate = models => {
       RecommendedAges.hasMany(models.Book, {
           as: 'Books',
           foreignKey: 'recommended_age_id'
       })
    }

    return RecommendedAges

}    