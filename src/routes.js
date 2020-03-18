const {Router, json} = require('express');
const cors = require('cors');
const PaymentFlowController = require('./app/controllers/PaymentFlowController');

const routes = new Router();

routes.use(cors());
routes.use(json());

routes.get('/payment', PaymentFlowController.index);

// routes.post('/payment', PaymentFlowController.create);

// routes.get('/payment/:nsu', PaymentFlowController.show);

module.exports = routes;