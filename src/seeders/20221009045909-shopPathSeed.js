'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('shop_paths', [{
      
      shop_path: "KlothShop",
      created_at: new Date(),
      updated_at: new Date(),
      user_id:"1"

    },
    {
      
      shop_path: "SHEIN",
      created_at: new Date(),
      updated_at: new Date(),
      user_id:"2"

    },
    {
      
      shop_path: "DAZY",
      created_at: new Date(),
      updated_at: new Date(),
      user_id:"4"

    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('shop_paths', null, {});

  }
};
