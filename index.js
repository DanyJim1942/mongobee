//CONFIGURACION DE RUTAS PARA EL USO DE LA API

const express = require('express');
const conectarDB = require('./config/db');

//CREAMOS EL SERVIDOR
const app = express();


//CONECTAMOS A LA DB
conectarDB();


//HABILITAMOS EL USO DE JSON
app.use(express.json());

app.use('/api/tarjeta', require('./routes/tarjeta'));

//ESTABLECEMOS RUTA DEFAULT
//app.get('/', (req, res) => {
//    res.send('ruta /');
//})

//DEFINIMOS PUERTO DE SERVIDOR E INICIALIZAMOS
app.listen(4000, () =>{
    console.log('SERVIDOR ACTIVO - 4000');
})