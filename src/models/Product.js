

module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product',
        {
            productName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            brand_name:{
                type: DataTypes.STRING, 
                defaultValue: "Kloth"
        },
            description: DataTypes.STRING,
            gender: {
                type: DataTypes.ENUM("MALE", "FEMALE", "N/A"),
                defaultValue: "N/A"
            }

        },
        { underscored: true }

    );


    Product.associate = db => {

        Product.belongsTo(db.User, {
            foreignKey: {
                name: 'sellerId',
                allowNull: false
            },
            onDelete: 'CASCADE',
        });

        Product.hasMany(db.Category, {
            foreignKey: {
                name: 'productId',
                allowNull: false
            },
            onDelete: 'CASCADE',
        });

        Product.hasMany(db.OrderItem, {
            foreignKey: {
                name: 'productId',
                allowNull: false
            },
            onDelete: 'CASCADE',
        });
        Product.hasMany(db.Cart, {
            foreignKey: {
                name: 'productId',
                allowNull: false
            },
            onDelete: 'CASCADE',
        });
        Product.hasMany(db.UrlImage, {
            foreignKey: {
                name: 'productId',
                allowNull: false
            },
            onDelete: 'CASCADE',
        });

    }

    return Product;
};