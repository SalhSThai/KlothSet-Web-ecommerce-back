

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
            price: {
                type: DataTypes.DECIMAL,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            size: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            amount: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            color: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            brand_name: DataTypes.STRING,
            description: DataTypes.STRING,
            discount: DataTypes.INTEGER,
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

        Product.belongsTo(db.Category, {
            foreignKey: {
                name: 'categoryId',
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