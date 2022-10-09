
module.exports = (sequelize, DataTypes) => {
    const ProductCategory = sequelize.define('ProductCategory',
        {},
        {
            underscored: true,
            timestamps: false
        },

    )
    return ProductCategory;
};