const Sequelize = require('sequelize');
const databaseConfig = require('../config/database');
const Payment = require('../app/models/Payment');

class Database {
    constructor(){
        this.init();
    }

    init(){
        this.connection = new Sequelize(databaseConfig);
        Payment.init(this.connection);
    }
}

module.exports = new Database();