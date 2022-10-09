'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('order_items', [{
      
      amount: 1,
      price:160,
      created_at: new Date(),
      updated_at: new Date(),
      order_id:1,
      transaction_id:1,
      product_id:1

    },
    {
      
      amount: 2,
      price:160,
      created_at: new Date(),
      updated_at: new Date(),
      order_id:2,
      transaction_id:2,
      product_id:1

    },
    {
      amount: 1,
      price:160,
      created_at: new Date(),
      updated_at: new Date(),
      order_id:2,
      transaction_id:3,
      product_id:2

    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('order_items', null, {});

  }
};
