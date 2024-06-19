//MODELO O INTERFAZ DE DOCUMENTO EN MONGO

const mongoose = require('mongoose');

const TarjetaSchema = mongoose.Schema({
    tarjeta:{type:String},
    nombre:{type:String},
    calle:{type:String},
    monto:{type:String},
    modalidad:{type:String},
    fechaCreacion:{type:Date, default: Date.now()}
})

module.exports = mongoose.model('Tarjeta1', TarjetaSchema,);