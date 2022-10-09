'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('transactions', [{
      
      total: 200,
      status:"pending",
      created_at: new Date(),
      updated_at: new Date(),
      date: new Date(),
      seller_id:2

    },
    {
      
      total: 300,
      status:"pending",
      created_at: new Date(),
      updated_at: new Date(),
      date: new Date(),
      seller_id:2

    },
    {
      total: 400,
      status:"pending",
      created_at: new Date(),
      updated_at: new Date(),
      date: new Date(),
      seller_id:2

    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('transactions', null, {});

  }
};
