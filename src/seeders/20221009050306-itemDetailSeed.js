'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('item_details', [{
      
      price:160,
      size:"xs",
      amount:5,
      color:"white",
      created_at: new Date(),
      updated_at: new Date(),
      product_id:1

    },
    {
      
      price:160,
      size:"s",
      amount:5,
      color:"red",
      created_at: new Date(),
      updated_at: new Date(),
      product_id:1

    },
    {
      price:160,
      size:"xs",
      amount:5,
      color:"blue",
      created_at: new Date(),
      updated_at: new Date(),
      product_id:1

    },{
      
      price:130,
      size:"xs",
      amount:5,
      color:"white",
      created_at: new Date(),
      updated_at: new Date(),
      product_id:2

    },
    {
      
      price:120,
      size:"xs",
      amount:5,
      color:"white",
      created_at: new Date(),
      updated_at: new Date(),
      product_id:3

    },
    {
      price:160,
      size:"xs",
      amount:5,
      color:"black",
      created_at: new Date(),
      updated_at: new Date(),
      product_id:1

    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('item_details', null, {});

  }
};
