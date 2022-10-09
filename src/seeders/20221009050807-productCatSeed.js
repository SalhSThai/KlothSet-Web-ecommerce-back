'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('product_categories', [{
      
      
      product_id:1,
      category_id:1

    },
    {
      
      product_id:1,
      category_id:2

    },
    {
      product_id:2,
      category_id:1

    },{
      
      product_id:3,
      category_id:1

    },
    {
      
      product_id:2,
      category_id:5

    },
    {
      product_id:3,
      category_id:3

    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('product_categories', null, {});

  }
};
