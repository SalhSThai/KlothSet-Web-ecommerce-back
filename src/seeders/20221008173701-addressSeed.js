'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('addresses', [{
      
      address: "585 Hampton Meadows Bedford 01730",
      created_at: new Date(),
      updated_at: new Date(),
      user_id:"3"

    },
    {
      
      address: "1176 Thrash Trail Longview Texas 75601",
      created_at: new Date(),
      updated_at: new Date(),
      user_id:"3"

    },
    {
      
      address: "3239 Hill Croft Farm Road Chico California 95926",
      created_at: new Date(),
      updated_at: new Date(),
      user_id:"3"

    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('addresses', null, {});

  }
};
