//CONTROLADORES PARA API DE MONGO
//ELEMENTO USADO: TARJETA
//CRUD

//APOYA A ROUTES.TARJETA

const Tarjeta = require("../models/Tarjeta");

exports.creaTarjeta = async (req, res) => {
  try {
    let tarjeta;

    tarjeta = new Tarjeta(req.body);
    tarjeta.model.collection = "body";
    await tarjeta.save();
    res.send(tarjeta);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.obtenerTarjetas = async (req, res) => {
  try {
    const tarjetas = await Tarjeta.find();
    res.json(tarjetas);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.actualizarTarjeta = async (req, res) => {
  try {
    const { tarjeta, nombre, calle, monto, modalidad } = req.body;
    let tarjet = await Tarjeta.findById(req.params.id);

    if (!tarjet) {
      res.status(404).json({ msg: "No existe el producto" });
    }

    tarjet.tarjeta = tarjeta;
    tarjet.nombre = nombre;
    tarjet.calle = calle;
    tarjet.monto = monto;
    tarjet.modalidad = modalidad;

    tarjet = await Tarjeta.findOneAndUpdate(
      { _id: req.params.id },
      tarjet,
      { new: true }
    );
    res.json(tarjet);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.obtenerTarjeta = async (req, res) => {
    try { 
      let tarjeta = await Tarjeta.findById(req.params.id);
  
      if (!tarjeta) {
        res.status(404).json({ msg: "No existe el producto" });
      }
      
      res.json(tarjeta);
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error");
    }
  };


exports.eliminarTarjeta = async (req, res) => {
    try { 
      let tarjeta = await Tarjeta.findById(req.params.id);
  
      if (!tarjeta) {
        res.status(404).json({ msg: "No existe el producto" });
      }
      await Tarjeta.findOneAndDelete({ _id: req.params.id });
      res.json({ msg: 'Producto eliminado con exito'});
    } catch (error) {
      console.log(error);
      res.status(500).send("Hubo un error");
    }
  };