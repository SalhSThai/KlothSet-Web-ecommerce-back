

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category',
    {
      categoryName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      subCategory: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },

    },
    { underscored: true }

  );


  Category.associate = db => {
    Category.belongsTo(db.Product, {
      foreignKey: {
        name: 'productId',
        allowNull: false
      },
      onDelete: 'CASCADE',
    });

    Category.belongsTo(db.User, {
      foreignKey: {
        name: 'shopId',
        allowNull: false
      },
      onDelete: 'CASCADE',
    });
  }

  return Category;
};