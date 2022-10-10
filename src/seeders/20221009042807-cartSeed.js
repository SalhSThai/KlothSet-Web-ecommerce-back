'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('carts', [{
      
      amount: 1,
      price:160,
      created_at: new Date(),
      updated_at: new Date(),
      user_id:3,
      item_id:1


    },
    {
      
      amount: 2,
      price:160,
      created_at: new Date(),
      updated_at: new Date(),
      user_id:3,
      item_id:2


    },
    {
      amount: 1,
      price:160,
      created_at: new Date(),
      updated_at: new Date(),
      user_id:3,
      item_id:3

    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('carts', null, {});

  }
};
