const Payment = require('../models/Payment');
const moment = require('moment');
const yup = require('yup');
const { calculateDate } = require('../utils/Dates');

class PaymentFlowController {
    async index(_, res) {
        const allData = await Payment.findAll({
            attributes: [
                'nsu',
                'valor',
                'bandeira',
                'modalidade',
                'horario',
                'liquido',
                'disponivel'
            ],
            raw: true,
        });
        const extrato = allData.map(el => {
            const {horario, valor, liquido} = el;
            el.horario = moment(horario).format();
            el.valor = Number.parseFloat(valor.toFixed(2));
            el.liquido = Number.parseFloat(liquido.toFixed(2));
            return el;
        })
        return res.json(extrato);
    }

    async create(req, res) {
        const {body} = req;
        // Definindo a estrutura aceita no body da requisição.
        const schema = yup.object().shape({
            horario: yup.date().required(),
            nsu: yup.string().required(),
            valor: yup.number().required(),
            bandeira: yup.string().oneOf(['VISA', 'MASTERCARD', 'ELO', 'AMEX']).required(),
            modalidade: yup.string().oneOf(['credito', 'debito']).required(),
        });
        try {
            // Verificando se o NSU já existe no sistema.
            const {nsu} = body;
            await schema.validate(body);
            const data = await Payment.findOne({
                where: {
                    nsu,
                }
            });
            if(data) throw {errors: ['nsu already in the database.']};
            const {modalidade, horario, valor} = body;
            // Aplicando lógicas de crédito e débito para os valores e a data.
            const tax = modalidade === 'credito' ? 0.03 : 0.02;
            const days = modalidade === 'credito' ? 30 : 1;
            body.liquido = Number.parseFloat((valor - (valor * tax)).toFixed(2));
            body.valor = Number.parseFloat(valor.toFixed(2));
            body.disponivel = calculateDate(horario, days);
            const payment = await Payment.create(body);
            return res.json(payment);
        }catch(err){
            return res.status(400).json({err: err.errors && err.errors[0] || err.message || 'Ocorreu um erro na solicitação.'});
        }
    }

    async balance(_, res){
        try {
            let disponivel = 0;
            let receber = 0;
            const dados = await Payment.findAll();
            dados.forEach(el => {
                const {disponivel: dataDisp, liquido} = el;
                const data = moment(dataDisp);
                const hoje = moment(new Date());
                if(data.isBefore(hoje)) disponivel += liquido;
                else receber += liquido;
            });
            return res.json({
                disponivel,
                receber
            });
        }catch(err) {
            return res.status(400).json({err: err.message || 'Ocorreu um erro na solicitação.'});
        }
    }
}

module.exports = new PaymentFlowController();