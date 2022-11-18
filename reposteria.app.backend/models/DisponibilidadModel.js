//para crear un modelo, necesitas una const tipo mongoose
const mongoose = require('mongoose')
const { Schema } = mongoose

//definicion del modelo
let DisponibilidadSchema = new Schema( {
    NombreChef: String,
    Estado: String,
} )

module.exports = mongoose.model('Disponibilidad', DisponibilidadSchema,'Disponibles')