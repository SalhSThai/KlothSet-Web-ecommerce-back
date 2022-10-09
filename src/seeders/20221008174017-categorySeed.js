'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('categories', [{
      
      category_name: 'T-shirt',
      created_at: new Date(),
      updated_at: new Date(),
      shop_id:"2"

    },
    {
      
      category_name: 'Dresses',
      created_at: new Date(),
      updated_at: new Date(),
      shop_id:"2"

    },
    {
      
      category_name: 'Pants',
      created_at: new Date(),
      updated_at: new Date(),
      shop_id:"2"

    },
    {
      
      category_name: 'Skirts',
      created_at: new Date(),
      updated_at: new Date(),
      shop_id:"2"

    },
    {
      
      category_name: 'Jeans',
      created_at: new Date(),
      updated_at: new Date(),
      shop_id:"2"

    },
    {
      
      category_name: 'ActiveWear',
      created_at: new Date(),
      updated_at: new Date(),
      shop_id:"2"

    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categories', null, {});

  }
};
