'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', [{
      role: 0,
      username: "admin1",
      shop_name: "admin1",
      first_name: "adminFirstName", last_name: "adminLastName", email: "admin1@kloth.com", phonenumber: "0111234569",
      password: "$2a$13$d7QiKMERWY0b98x4EMmRauPdOzo9SgNUf4KYBwQq.ABwtZQdsl7Ti",
      profile_image: "https://res.cloudinary.com/klothcloud/image/upload/v1664976229/1664976227958538678596.png",
      created_at: new Date(),
      updated_at: new Date(),

    },
    {
      role: 1,
      username: "user1",
      shop_name: "SHEIN",
      first_name: "user2FirstName", last_name: "user2LastName", email: "user1@gmail.com", phonenumber: "0111234568",
      password: "$2a$13$d7QiKMERWY0b98x4EMmRauPdOzo9SgNUf4KYBwQq.ABwtZQdsl7Ti",
      profile_image: "https://res.cloudinary.com/klothcloud/image/upload/v1664950732/cld-sample.jpg",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      role: 1,
      username: "user2",
      first_name: "user2FirstName", last_name: "user2LastName", email: "user2@gmail.com", phonenumber: "0111234567",
      password: "$2a$13$d7QiKMERWY0b98x4EMmRauPdOzo9SgNUf4KYBwQq.ABwtZQdsl7Ti",
      profile_image: "https://res.cloudinary.com/klothcloud/image/upload/v1664950732/cld-sample.jpg",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      role: 2,
      username: "seller1",
      shop_name: "GLOWMODE",
      email: "seller1@gmail.com", phonenumber: "0111234566",
      password: "$2a$13$dX1X4zR2A2ilNGlcdrT5WOZ/PPzoH7/IHQ9iLtv5m.3B8mQBKFQ0G",
      profile_image: "//img.ltwebstatic.com/images3_pi/2022/09/26/1664185878c63d25c1f2969c308d9ff5271c6ab6b7.webp",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      role: 2,
      username: "seller2",
      shop_name: "CUCCOO",
       email: "seller2@gmail.com", phonenumber: "0111234565",
      password: "$2a$13$d7QiKMERWY0b98x4EMmRauPdOzo9SgNUf4KYBwQq.ABwtZQdsl7Ti",
      profile_image: "//img.ltwebstatic.com/images3_pi/2021/11/30/16382589746bef37ff75e4266f4371db4a2306bb16.webp",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      role: 2,
      username: "seller3",
      shop_name: "MOTF",
      first_name: "user2FirstName", last_name: "user2LastName", email: "seller3@gmail.com", phonenumber: "0111234564",
      password: "$2a$13$d7QiKMERWY0b98x4EMmRauPdOzo9SgNUf4KYBwQq.ABwtZQdsl7Ti",
      profile_image: "//img.ltwebstatic.com/images3_pi/2022/09/07/16625344743bd5ce20e15c24d162dda6c13d2f0c8c.webp",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      role: 2,
      username: "seller4",
      shop_name: "DAZY",
      email: "seller4@gmail.com", phonenumber: "0111234563",
      password: "'$2a$13$dX1X4zR2A2ilNGlcdrT5WOZ/PPzoH7/IHQ9iLtv5m.3B8mQBKFQ0G'",
      profile_image: "//img.ltwebstatic.com/images3_pi/2022/03/09/1646814464ea376a7cffe36b17834eb51cd99c0ef7.webp",
      created_at: new Date(),
      updated_at: new Date(),
    }], {});

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
