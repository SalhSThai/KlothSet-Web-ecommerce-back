

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
            brandName: {
                type: DataTypes.STRING,
                defaultValue: "Kloth"
            }, 
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            }, 
            star: {
                type: DataTypes.DECIMAL(5, 1),
                allowNull: false,
                defaultValue:5,
                validate: {
                    notEmpty: true
                }
            }, 
            productImage:  DataTypes.STRING ,
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

        Product.belongsToMany(db.Category, { 
            foreignKey: "productId",
            through:db.ProductCategory,
            onDelete: 'CASCADE',
        });

        Product.hasMany(db.OrderItem, {
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
        Product.hasMany(db.ItemDetail, {
            foreignKey: {
                name: 'productId',
                allowNull: false
            },
            onDelete: 'CASCADE',
        });

    }

    return Product;
};