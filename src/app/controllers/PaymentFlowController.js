class PaymentFlowController {
    async index(req, res) {
        return res.json({hello: 'world'});
    }
}

module.exports = new PaymentFlowController();