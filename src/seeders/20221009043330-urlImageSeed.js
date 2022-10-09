'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('url_images', [{
      
      url_image: "https://res.cloudinary.com/klothcloud/image/upload/v1665248906/product-1_tvrw7f.webp",
      created_at: new Date(),
      updated_at: new Date(),
      product_id:1

    },
    {
      
      url_image: "https://res.cloudinary.com/klothcloud/image/upload/v1665248906/product1-3_ykrshc.webp",
      created_at: new Date(),
      updated_at: new Date(),
      product_id:1

    },
    {
      url_image: "https://res.cloudinary.com/klothcloud/image/upload/v1665248906/product1-2_e51cso.webp",
      created_at: new Date(),
      updated_at: new Date(),
      product_id:1

    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('url_images', null, {});

  }
};
