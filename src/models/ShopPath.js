

module.exports = (sequelize, DataTypes) => {
    const ShopPath = sequelize.define('ShopPath',
      {        
        shopPath: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              notEmpty: true
            }
        
      }
    },
      { underscored: true }
  
    );
  
    ShopPath.associate = db => {
  
      ShopPath.belongsTo(db.User, {
        foreignKey: {
          name: 'userId',
          allowNull: false
        },
        onDelete: 'CASCADE',
      }); 
  
  
  
    };
  
    return ShopPath;
  };