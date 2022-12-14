

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User',
    {
      role: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        defaultValue:"1",
        validate: {
          notEmpty: false
        }
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true
        }
      },
      shopName: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
      firstName: {
        type: DataTypes.STRING,
      },
      lastName: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      phonenumber: {
        type: DataTypes.STRING,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      profileImage: DataTypes.STRING,
      
    },
    { underscored: true }

  );

  User.associate = db => {

    User.hasMany(db.Address, {
      foreignKey: {
        name: 'userId',
        allowNull: false
      },
      onDelete: 'CASCADE',
    });
    User.hasMany(db.ShopCarousal, {
      foreignKey: {
        name: 'shopId',
        allowNull: false
      },
      onDelete: 'CASCADE',
    });

    User.belongsToMany(db.ItemDetail, { 
      foreignKey: "userId",
      through:db.Cart,
      onDelete: 'CASCADE',
  });
    User.hasMany(db.Order, {
      foreignKey: {
        name: 'buyerId',
        allowNull: false
      },
      onDelete: 'CASCADE',
    });
    User.hasMany(db.Product, {
      foreignKey: {
        name: 'sellerId',
        allowNull: false
      },
      onDelete: 'CASCADE', 
    });
    User.hasMany(db.Transaction, {
      foreignKey: {
        name: 'sellerId',
        allowNull: false
      },
      onDelete: 'CASCADE', 
    });
    User.hasOne(db.ShopPath, {
      foreignKey: {
        name: 'userId',
        allowNull: false
      },
      onDelete: 'CASCADE',
    }); 
    User.hasMany(db.Category, {
      foreignKey: {
        name: 'shopId',
        allowNull: false
      },
      onDelete: 'CASCADE', 
    });


  };

  return User;
};