'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('orders', [{
      
      date: new Date(),
      created_at: new Date(),
      updated_at: new Date(),
      buyer_id:"3"

    },
    {
      
      date: new Date(),
      created_at: new Date(),
      updated_at: new Date(),
      buyer_id:"3"

    },
    {
      
      date: new Date(),
      created_at: new Date(),
      updated_at: new Date(),
      buyer_id:"3"

    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('orders', null, {});

  }
};
