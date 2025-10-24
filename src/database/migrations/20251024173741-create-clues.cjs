'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('clues', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      hint_for_type: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      hint: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true,
      },
      id_scenarios: {
        type: Sequelize.INTEGER,
        references: {
          model: 'scenarios',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('clues');
  },
};
