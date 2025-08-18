"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const currentDate = new Date();

    await queryInterface.bulkInsert(
      "stocks",
      [
        {
          productId: 1,
          quantity: 10,
          location: 'Aisle 1',
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          productId: 2,
          location: 'Aisle 1',
          quantity: 5,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          productId: 3,
          quantity: 50,
          location: 'Aisle 1',
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          productId: 4,
          quantity: 0,
          location: 'Aisle 1',
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          productId: 5,
          quantity: 3,
          location: 'Aisle 1',
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          productId: 6,
          location: 'Aisle 1',
          quantity: 36,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          productId: 7,
          quantity: 90,
          location: 'Aisle 1',
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          productId: 8,
          quantity: 2,
          location: 'Aisle 1',
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          productId: 9,
          location: 'Aisle 1',
          quantity: 20,
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          productId: 10,
          quantity: 56,
          location: 'Aisle 1',
          createdAt: currentDate,
          updatedAt: currentDate,
        },
        {
          productId: 11,
          quantity: 56,
          location: 'Aisle 1',
          createdAt: currentDate,
          updatedAt: currentDate,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
