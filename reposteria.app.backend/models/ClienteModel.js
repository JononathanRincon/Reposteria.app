//para crear un modelo, necesitas una const tipo mongoose
const mongoose = require('mongoose')
const { Schema } = mongoose

//definicion del modelo
let clienteSchema = new Schema( {
    Identificacion: String,
    Nombre: String,
    Apellido: String,
    NumTelefono: String,
    Correo: String,
    Direccion: String,
} )

module.exports = mongoose.model('cliente', UserSchema,'clientes')