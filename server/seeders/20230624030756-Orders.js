"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Orders", [
      {
        users_id: 1,
        customers_id: 1,
        warehouse_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        users_id: 1,
        customers_id: 1,
        warehouse_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        users_id: 1,
        customers_id: 1,
        warehouse_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        users_id: 1,
        customers_id: 1,
        warehouse_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
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