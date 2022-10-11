'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('item_details', [{
      
      price:160,
      size:"xs",
      amount:5,
      color:"white",
      sub_name:"white1",
      created_at: new Date(),
      updated_at: new Date(),
      product_id:1

    },
    {
      
      price:160,
      size:"s",
      amount:5,
      color:"red",
      sub_name:"red1",
      created_at: new Date(),
      updated_at: new Date(),
      product_id:1

    },
    {
      price:160,
      size:"xs",
      amount:5,
      color:"blue",
      sub_name:"blue1",
      created_at: new Date(),
      updated_at: new Date(),
      product_id:1

    },{
      
      price:130,
      size:"xs",
      amount:5,
      color:"white",
      sub_name:"white2",
      created_at: new Date(),
      updated_at: new Date(),
      product_id:2

    },
    {
      
      price:120,
      size:"xs",
      amount:5,
      color:"white",
      sub_name:"white3",
      created_at: new Date(),
      updated_at: new Date(),
      product_id:3

    },
    {
      price:160,
      size:"xs",
      amount:5,
      color:"black",
      sub_name:"white1",
      created_at: new Date(),
      updated_at: new Date(),
      product_id:1

    },
    {
      price:160,
      size:"xs",
      amount:5,
      color:"white1",
      sub_name:"white1",
      created_at: new Date(),
      updated_at: new Date(),
      product_id:4

    },
    {
      price:160,
      size:"xs",
      amount:5,
      color:"white1",
      sub_name:"white1",
      created_at: new Date(),
      updated_at: new Date(),
      product_id:5

    },
    {
      price:160,
      size:"xs",
      amount:5,
      color:"white1",
      sub_name:"white1",
      created_at: new Date(),
      updated_at: new Date(),
      product_id:6

    },
    {
      price:160,
      size:"xs",
      amount:5,
      color:"white1",
      sub_name:"white1",
      created_at: new Date(),
      updated_at: new Date(),
      product_id:7

    },
    {
      price:160,
      size:"xs",
      amount:5,
      color:"white1",
      sub_name:"white1",
      created_at: new Date(),
      updated_at: new Date(),
      product_id:8

    },
    {
      price:160,
      size:"xs",
      amount:5,
      color:"white1",
      sub_name:"white1",
      created_at: new Date(),
      updated_at: new Date(),
      product_id:9

    }
  
  
  ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('item_details', null, {});

  }
};
