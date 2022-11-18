//para crear un modelo, necesitas una const tipo mongoose
const mongoose = require('mongoose')
const { Schema } = mongoose

//definicion del modelo
let PagoSchema = new Schema( {
    MedioPago: String,
} )

module.exports = mongoose.model('Pago', PagoSchema,'Pagos')