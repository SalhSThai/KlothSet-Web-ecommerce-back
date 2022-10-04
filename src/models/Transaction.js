

module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction',
      {
        total: {
            type: DataTypes.DECIMAL,
            allowNull: false,
            validate: {
              notEmpty: true
            }
          },
          status: {
            type: DataTypes.ENUM("pending","success"),
            allowNull: false,
            defaultValue:"pending",
            validate: {
              notEmpty: true
            }
          },
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


    Transaction.associate = db => {
        Transaction.belongsTo(db.User, {
            foreignKey: {
                name: 'sellerId',
                allowNull: false
            },
            onDelete: 'CASCADE',
        });
    }
  
    return Transaction;
  };