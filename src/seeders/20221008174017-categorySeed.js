'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories', [{
      
      categories: 'T-shirt',
      created_at: new Date(),
      updated_at: new Date(),
      shop_id:"2"

    },
    {
      
      categories: 'Dresses',
      created_at: new Date(),
      updated_at: new Date(),
      shop_id:"2"

    },
    {
      
      categories: 'Pants',
      created_at: new Date(),
      updated_at: new Date(),
      shop_id:"2"

    },
    {
      
      categories: 'Skirts',
      created_at: new Date(),
      updated_at: new Date(),
      shop_id:"2"

    },
    {
      
      categories: 'Jeans',
      created_at: new Date(),
      updated_at: new Date(),
      shop_id:"2"

    },
    {
      
      categories: 'ActiveWear',
      created_at: new Date(),
      updated_at: new Date(),
      shop_id:"2"

    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categories', null, {});

  }
};
