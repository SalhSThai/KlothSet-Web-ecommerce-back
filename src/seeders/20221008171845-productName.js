'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('products', [{
      product_name:"DAZY Cut Out Rib-knit Tee",
      brand_name:"DAZY",
      description:"description 1 T-shirt",
      gender:"FEMALE",
      seller_id:"2",
      price:150,
      product_image:"https://res.cloudinary.com/klothcloud/image/upload/v1665248906/product1_dfnzxp.webp",
      created_at: new Date(),
      updated_at: new Date(),

    },
    {
      product_name:"SHEIN Argyle Print Tee",
      brand_name:"KLOTH",
      description:"description 2 T-shirt",
      gender:"FEMALE",
      seller_id:"2",
      price:120,
      product_image:"https://res.cloudinary.com/klothcloud/image/upload/v1665248906/product4_hdinyb.webp",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      product_name:"Letter Graphic Contrast Trim Tee",
      brand_name:"SHEIN",
      description:"description 3 T-shirt",
      gender:"FEMALE",
      seller_id:"2",
      price:199,
      product_image:"https://res.cloudinary.com/klothcloud/image/upload/v1665248906/product3_nf1cs3.webp",
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('products', null, {});

  }
};
