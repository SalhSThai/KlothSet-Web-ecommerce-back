

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
          discount: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
              notEmpty: true
            }
          },
        
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
                name: 'TransactionId',
                allowNull: false
            },
            onDelete: 'CASCADE',
        });
        OrderItem.belongsTo(db.Product, {
            foreignKey: {
                name: 'ProductId',
                allowNull: false
            },
            onDelete: 'CASCADE',
        });

    }
  
    return OrderItem;
  };