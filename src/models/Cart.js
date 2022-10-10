

module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define('Cart',
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
          discount:DataTypes.DECIMAL,
          
        
      },
      { underscored: true }
  
    );

    Cart.associate = db => {
        Cart.belongsTo(db.User, {
            foreignKey: {
                name: 'userId',
                allowNull: false
            },
            onDelete: 'CASCADE',
        });

        Cart.belongsTo(db.ItemDetail, {
            foreignKey: {
                name: 'itemId',
                allowNull: false
            },
            onDelete: 'CASCADE',
        });

        

    }
  
    return Cart;
  };

  