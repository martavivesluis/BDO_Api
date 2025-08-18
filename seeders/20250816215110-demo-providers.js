'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const currentDate = new Date();
    
    await queryInterface.bulkInsert('providers', [
      {
        name: 'mock-wms',
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        name: 'mock-wms-2',
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        name: 'mock-wms-3',
        createdAt: currentDate,
        updatedAt: currentDate
      },
      {
        name: 'mock-wms-4',
        createdAt: currentDate,
        updatedAt: currentDate
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('providers', null, {});
  }
};
