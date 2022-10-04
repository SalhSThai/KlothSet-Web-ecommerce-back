

module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define('Address',
        {
            address: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: true
                }
            },

        },
        { underscored: true }

    );

    Address.associate = db => {
        Address.belongsTo(db.User, {
            foreignKey: {
                name: 'userId',
                allowNull: false
            },
            onDelete: 'CASCADE',
        });
    }

    return Address;
};