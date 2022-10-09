'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      role: 0,
      username: "admin2",
      shop_name: "KlothShop",
      first_name: "adminFirstName", last_name: "adminLastName", email: "admin2@kloth.com", phonenumber: "0111234567",
      password: "'$2a$13$dX1X4zR2A2ilNGlcdrT5WOZ/PPzoH7/IHQ9iLtv5m.3B8mQBKFQ0G'",
      profile_image: "https://res.cloudinary.com/klothcloud/image/upload/v1664976229/1664976227958538678596.png",
      created_at: new Date(),
      updated_at: new Date(),

    },
    {
      role: 2,
      username: "seller2",
      shop_name: "SHEIN",
       email: "SHEIN@gmail.com", phonenumber: "0111234568",
      password: "'$2a$13$dX1X4zR2A2ilNGlcdrT5WOZ/PPzoH7/IHQ9iLtv5m.3B8mQBKFQ0G'",
      profile_image: "https://res.cloudinary.com/klothcloud/image/upload/v1665239128/1665239127094676819046.png",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      role: 1,
      username: "user2",
      first_name: "user2FirstName", last_name: "user2LastName", email: "user2@gmail.com", phonenumber: "0111234566",
      password: "'$2a$13$dX1X4zR2A2ilNGlcdrT5WOZ/PPzoH7/IHQ9iLtv5m.3B8mQBKFQ0G'",
      profile_image: "https://res.cloudinary.com/klothcloud/image/upload/v1664950732/cld-sample.jpg",
      created_at: new Date(),
      updated_at: new Date(),
    }], {});

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
