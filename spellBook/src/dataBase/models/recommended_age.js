module.exports = (sequelize,dataTypes) => {
    let alias = "Recommended_Ages"

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
        }
    }
    let config = {
        tablename: "recommended_ages",
        timestamps: false
    }

    const RecommendedAges = sequelize.define(alias,cols,config)

    RecommendedAges.associate = models => {
        RecommendedAges.hasMany(models.Books,{
            as:"books",
            foreignKey:"recommendedAge_id"
        })
    }

    return RecommendedAges

}    