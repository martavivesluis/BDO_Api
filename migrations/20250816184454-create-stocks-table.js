'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('stocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },

      //association with Product
      productId: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
				references: {
					model: "products",
					key: "id"
				},
				onDelete: 'CASCADE'
      },

      location: {
        type: Sequelize.STRING,
        allowNull: false
      },


      quantity: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    // Add a unique constraint on productId
    await queryInterface.addConstraint('stocks', {
      fields: ['location', 'productId'],
      type: 'unique',
      name: 'unique_location_product' // nombre del índice único
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('stocks');
  }
};