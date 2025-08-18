"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const currentDate = new Date();

    await queryInterface.bulkInsert(
      "products",
      [
        {
          sku: "ABC-1234",
          providerId: 1,
          createdAt: currentDate,
          updatedAt: currentDate
        },
        {
          sku: "MVL-5595",
          providerId: 1,
          createdAt: currentDate,
          updatedAt: currentDate
        },
        {
          sku: "MLR-4859",
          providerId: 1,
          createdAt: currentDate,
          updatedAt: currentDate
        },
        {
          sku: "TRL-8065",
          providerId: 1,
          createdAt: currentDate,
          updatedAt: currentDate
        },
        {
          sku: "PXL-8034",
          providerId: 2,
          createdAt: currentDate,
          updatedAt: currentDate
        },
        {
          sku: "ELB-9233",
          providerId: 2,
          createdAt: currentDate,
          updatedAt: currentDate
        },
        {
          sku: "CVL-5465",
          providerId: 2,
          createdAt: currentDate,
          updatedAt: currentDate
        },
        {
          sku: "WXY-9856",
          providerId: 3,
          createdAt: currentDate,
          updatedAt: currentDate
        },
        {
          sku: "QAL-9865",
          providerId: 3,
          createdAt: currentDate,
          updatedAt: currentDate
        },
        {
          sku: "MIU-0055",
          providerId: 3,
          createdAt: currentDate,
          updatedAt: currentDate
        },
        {
          sku: "YUF-6547",
          providerId: 4,
          createdAt: currentDate,
          updatedAt: currentDate
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('products', null, {});

  },
};
