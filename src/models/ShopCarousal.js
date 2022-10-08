

module.exports = (sequelize, DataTypes) => {
    const ShopCarousal = sequelize.define('ShopCarousal',
        {
            urlCarousal: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },

        },
        { underscored: true }

    );

    ShopCarousal.associate = db => {
        ShopCarousal.belongsTo(db.User, {
            foreignKey: {
                name: 'shopId',
                allowNull: false
            },
            onDelete: 'CASCADE',
        });
    }

    return ShopCarousal;
};