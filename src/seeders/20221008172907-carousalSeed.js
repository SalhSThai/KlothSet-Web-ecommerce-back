'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('shop_carousals', [{
      shop_id:4,
      url_carousal:"https://res.cloudinary.com/klothcloud/image/upload/v1665250093/Carousal2_a4f4iz.jpg",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      shop_id:5,
      url_carousal:"https://res.cloudinary.com/klothcloud/image/upload/v1665250093/Carousal4_ea6ss8.gif",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      shop_id:6,
      url_carousal:"https://res.cloudinary.com/klothcloud/image/upload/v1665250093/Carousal3_ljakrs.gif",
      created_at: new Date(),
      updated_at: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('shop_carousals', null, {});

  }
};
