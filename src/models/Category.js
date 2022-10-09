

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

    },
    { underscored: true }

  );


  Category.associate = db => {
    Category.belongsToMany(db.Product, {
      foreignKey: "categoryId",
      through: db.ProductCategory,
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