

module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order',
      {
        date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
              notEmpty: true
            }
          },
        
      },
      { underscored: true }
  
    );

    Order.associate = db => {
        Order.belongsTo(db.User, {
            foreignKey: {
                name: 'buyerId',
                allowNull: false
            },
            onDelete: 'CASCADE',
        });
        Order.hasMany(db.OrderItem, {
            foreignKey: {
                name: 'orderId',
                allowNull: false
            },
            onDelete: 'CASCADE',
        });
    }
  
    return Order;
  };