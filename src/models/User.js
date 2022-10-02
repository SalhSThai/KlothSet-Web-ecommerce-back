

module.exports = (sequelize,DataTypes) => {
    const User = sequelize.define('User',
    {
        username:{
            type:DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true
              }
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notEmpty: true
            }
          },
          lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              notEmpty: true
            }
          },
          email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
              isEmail: true
            }
          },
          phone: {
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

    return User;
};