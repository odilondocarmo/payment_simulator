const Sequelize = require('sequelize');

class Payment extends Sequelize.Model {
    static init(sequelize) {
        super.init({
            nsu: Sequelize.STRING,
            valor: Sequelize.FLOAT,
            bandeira: Sequelize.STRING,
            modalidade: Sequelize.STRING,
            horario: Sequelize.DATE,
            liquido: Sequelize.FLOAT,
            disponivel:Sequelize.DATEONLY,
        }, {sequelize});
    }
}

module.exports = Payment;