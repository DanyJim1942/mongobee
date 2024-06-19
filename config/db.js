//CONFIGURACION PARA LA CONEXION A BASE DE DATOS

const mongoose = require("mongoose");

const conectarDB = async () => {
  try {
    await mongoose.connect(
      //URL DE LA BASE DE DATOS
      "mongodb+srv://danyjim:Hornet1234@cluster0.ukdblb7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    );
    console.log('BASE DE DATOS CONECTADA');
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = conectarDB;
