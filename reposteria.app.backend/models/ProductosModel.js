//para crear un modelo, necesitas una const tipo mongoose
const mongoose = require('mongoose')
const { Schema } = mongoose

//definicion del modelo
let ProductosSchema = new Schema( {
    Nombre: String,
    Precio: Int32Array,
    Descripcion: String,
    Tipo: String,
} )

module.exports = mongoose.model('Productos', ProductosSchema,'Producto')