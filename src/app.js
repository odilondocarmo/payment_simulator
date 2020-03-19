const express= require( 'express');
const routes = require('./routes');
require('dotenv/config');
require('./database');

class App {
  constructor() {
    this.server = express();
    this.routes();
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;