

module.exports = (sequelize, DataTypes) => {
    const OrderItem = sequelize.define('OrderItem',
      {
        amount: {
            type: DataTypes.SMALLINT,
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
          discount:  DataTypes.DECIMAL,
        
      },
      { underscored: true }
  
    );

    OrderItem.associate = db => {
        OrderItem.belongsTo(db.Order, {
            foreignKey: {
                name: 'orderId',
                allowNull: false
            },
            onDelete: 'CASCADE',
        });
        OrderItem.belongsTo(db.Transaction, {
            foreignKey: {
                name: 'transactionId',
                allowNull: false
            },
            onDelete: 'CASCADE',
        });
        OrderItem.belongsTo(db.Product, {
            foreignKey: {
                name: 'productId',
                allowNull: false
            },
            onDelete: 'CASCADE',
        });

    }
  
    return OrderItem;
  };