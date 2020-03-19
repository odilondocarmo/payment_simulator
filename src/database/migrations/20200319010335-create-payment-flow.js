'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('payments', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nsu: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      valor: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      bandeira: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      modalidade: {
        type: Sequelize.ENUM,
        values: ['debito', 'credito'],
        allowNull: false,
      },
      horario: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      liquido: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      disponivel: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      }
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('payments');
  }
};
