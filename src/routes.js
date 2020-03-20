const {Router, json} = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerOptions = require('../swagger.json');

const cors = require('cors');
const PaymentFlowController = require('./app/controllers/PaymentFlowController');
const Auth = require('./app/middleware/Auth');

const routes = new Router();

routes.use(cors());
routes.use(json());

routes.post('/pagamento',Auth.terminal, PaymentFlowController.create);

// Tópico 3 do desafio, Extrato, contendo detalhamento de todas as transações
routes.get('/extrato', Auth.portal, PaymentFlowController.index);

// Tópico 4 do desafio, Consulta dos valores disponíveis e a receber.
routes.get('/consulta', Auth.portal, PaymentFlowController.balance);

routes.post('/deleteall', PaymentFlowController.destroy)

routes.use('/', swaggerUi.serve);
routes.get('/', swaggerUi.setup(swaggerOptions));


module.exports = routes;