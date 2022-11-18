//para crear un modelo, necesitas una const tipo mongoose
const mongoose = require('mongoose')
const { Schema } = mongoose

//definicion del modelo
let AdministradorSchema = new Schema( {
    Nombre: String,
    apellido: String,
    NumTelefono: String,
    Correo: String,
} )

module.exports = mongoose.model('Administrador', AdministradorSchema,'Administradors')