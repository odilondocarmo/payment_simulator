const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    nsu: {
        type: String,
        required: true,
    },
    valor: {
        type: Number,
        required: true,
    },
    bandeira: {
        type: String,
        enum: ['VISA', 'MASTERCARD', 'ELO', 'AMEX'],
        required: true,
    },
    modalidade: {
        type: String,
        enum: ['debito', 'credito'],
        required: true
    },
    horario: {
        type: Date,
        required: true
    },
    liquido: {
        type: Number,
        required: true
    },
    disponivel: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Payment',PaymentSchema);