const {Router, json} = require('express');
const cors = require('cors');
const PaymentFlowController = require('./app/controllers/PaymentFlowController');
const Auth = require('./app/middleware/Auth');

const routes = new Router();

routes.use(cors());
routes.use(json());

// Tópico 2 do desafio, terminal enviando um JSON com os dados da venda. 
routes.post('/pagamento',Auth.terminal, PaymentFlowController.create);

// Tópico 3 do desafio, Extrato, contendo detalhamento de todas as transações
routes.get('/extrato', Auth.portal, PaymentFlowController.index);

// Tópico 4 do desafio, Consulta dos valores disponíveis e a receber.
routes.get('/consulta', Auth.portal, PaymentFlowController.balance);

module.exports = routes;