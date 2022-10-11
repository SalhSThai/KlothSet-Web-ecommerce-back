'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('products', [{
      product_name:"DAZY Cut Out Rib-knit Tee",
      brand_name:"DAZY",
      description:"description 1 T-shirt",
      gender:"FEMALE",
      seller_id:"4",
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
      seller_id:"4",
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
      seller_id:"4",
      price:199,
      product_image:"https://res.cloudinary.com/klothcloud/image/upload/v1665248906/product3_nf1cs3.webp",
      created_at: new Date(),
      updated_at: new Date(),
    },{
      product_name:"DAZY Cut Out Rib-knit Tee",
      brand_name:"DAZY",
      description:"description 1 T-shirt",
      gender:"FEMALE",
      seller_id:"5",
      price:150,
      product_image:"https://img.ltwebstatic.com/images3_pi/2022/04/29/1651208207e6aa1454aed89df8e249996033090b7b.webp",
      created_at: new Date(),
      updated_at: new Date(),

    },
    {
      product_name:"SHEIN Argyle Print Tee",
      brand_name:"KLOTH",
      description:"description 2 T-shirt",
      gender:"FEMALE",
      seller_id:"5",
      price:120,
      product_image:"//img.ltwebstatic.com/images3_pi/2022/09/26/1664185878c63d25c1f2969c308d9ff5271c6ab6b7.webp",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      product_name:"Letter Graphic Contrast Trim Tee",
      brand_name:"SHEIN",
      description:"description 3 T-shirt",
      gender:"FEMALE",
      seller_id:"6",
      price:199,
      product_image:"//img.ltwebstatic.com/images3_pi/2022/01/10/16417955956fb494cb4198d86e0f0a501cb0965a15.webp",
      created_at: new Date(),
      updated_at: new Date(),
    },{
      product_name:"Solid Square Neck A-line Dress",
      brand_name:"DAZY",
      description:"description 1 T-shirt",
      gender:"FEMALE",
      seller_id:"6",
      price:150,
      product_image:"//img.ltwebstatic.com/images3_pi/2021/11/30/16382589746bef37ff75e4266f4371db4a2306bb16.webp",
      created_at: new Date(),
      updated_at: new Date(),

    },
    {
      product_name:"Glitter High Low Hem Tube Prom Dress",
      brand_name:"KLOTH",
      description:"description 2 T-shirt",
      gender:"FEMALE",
      seller_id:"4",
      price:120,
      product_image:"https://res.cloudinary.com/klothcloud/image/upload/v1665248906/product4_hdinyb.webp",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      product_name:"Gingham Mock Neck Puff Sleeve Dress",
      brand_name:"SHEIN",
      description:"description 3 T-shirt",
      gender:"FEMALE",
      seller_id:"4",
      price:199,
      product_image:"//img.ltwebstatic.com/images3_pi/2022/03/09/1646814464ea376a7cffe36b17834eb51cd99c0ef7.webp",
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('products', null, {});

  }
};
