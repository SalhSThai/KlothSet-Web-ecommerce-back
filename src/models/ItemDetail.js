

module.exports = (sequelize, DataTypes) => {
    const ItemDetail = sequelize.define('ItemDetail',
        {
           
            price: {
                type: DataTypes.DECIMAL,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            size: {
                type: DataTypes.ENUM("xs","s","m","l","xl"),
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
            subName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },
            discount: DataTypes.INTEGER,

        },
        { underscored: true }

    );


    ItemDetail.associate = db => {

        ItemDetail.belongsTo(db.Product, {
            foreignKey: {
                name: 'productId',
                allowNull: false
            },
            onDelete: 'CASCADE',
        });
        
        ItemDetail.belongsToMany(db.User, { 
            foreignKey: "itemId",
            through:db.Cart,
            onDelete: 'CASCADE',
        });

    }

    return ItemDetail;
};