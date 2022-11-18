//para crear un modelo, necesitas una const tipo mongoose
const mongoose = require('mongoose')
const { Schema } = mongoose

//definicion del modelo
let DomiciliariosSchema = new Schema( {
    Nombre: String,
    Apellido: String,
    NumTelefono: String,
    Correo: String,
} )

module.exports = mongoose.model('Domiciliarios', DomiciliariosSchema,'Domiciliario')