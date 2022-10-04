

module.exports = (sequelize, DataTypes) => {
    const UrlImage = sequelize.define('UrlImage',
        {
            urlImage: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },

        },
        { underscored: true }

    );
    UrlImage.associate = db => {
        UrlImage.belongsTo(db.Product, {
            foreignKey: {
                name: 'productId',
                allowNull: false
            },
            onDelete: 'CASCADE',
        });
    }

    return UrlImage;
};