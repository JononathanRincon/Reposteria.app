//para crear un modelo, necesitas una const tipo mongoose
const mongoose = require('mongoose')
const { Schema } = mongoose

//definicion del modelo
let ChefSchema = new Schema( {
    Nombre: String,
    apellido: String,
    NumTelefono: String,
    Correo: String,
} )

module.exports = mongoose.model('Chef', ChefSchema,'Chefs')