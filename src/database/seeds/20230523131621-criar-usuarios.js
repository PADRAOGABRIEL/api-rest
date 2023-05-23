'use strict';

const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Gerlandy',
          email: 'gigi@gmail.com',
          password_hash: await bcrypt.hash('123456', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Gerlandy5',
          email: 'gigi5@gmail.com',
          password_hash: await bcrypt.hash('764445', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          nome: 'Gerlandy9',
          email: 'gigi8@gmail.com',
          password_hash: await bcrypt.hash('097343', 8),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  async down() {
  },
};
