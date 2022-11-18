//para crear un modelo, necesitas una const tipo mongoose
const mongoose = require('mongoose')
const { Schema } = mongoose

//definicion del modelo
let PedidosSchema = new Schema( {
    FechaSolicitud: Date,
    FechaEntrega: Date,
    Cliente_Id: String,
    Cantidad: Int32Array,
    EntregaRealizada: Boolean,
    HoraEntrega: String,
    Pago_Id:Int32Array,
    Producto_Id: String,
} )

module.exports = mongoose.model('Pedidos', PedidosSchema,'Pedido')