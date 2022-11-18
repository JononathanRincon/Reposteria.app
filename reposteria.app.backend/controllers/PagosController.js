const Pago = require("../models/PagosModel");

//EndPoint para crear Pago
const createPago = (req, res) => {
  const { body } = req;  
  const newPago = new Pago({
    MedioPago: body.MedioPago.toUpperCase(),
  }); 

  // opcion 4
  Pago.findOne({ Nombre: newPago.Nombre }, (err, pagoFinded) => {
    if (pagoFinded) {
      res.send({ message: "Pago ya existe" });
    } else if (!pagoFinded) {
      if (err) {
        res.send({ message: "Error del servidor: " + err });
      } else {
        // opcion 4 guardando un Pago con el formato tipo callback
        newPago.save((err, pagoStored) => {
          if (pagoStored) {
            res.send({
              message: "Pago creado con exito",
            });
          }
          if (err) {
            res.send({ message: "Error del servidor" });
          }
        });
      }      
    } else {
      res.send({ message: "Error del servidor: " + err });
    }
  });
};

//EndPoint para crear editar Pago
const editPago = (req, res) => {
  const idToUpdate = req.params.id;
  const { body } = req;
  const pagoToUpdate = {
    MedioPago: body.MedioPago.toUpperCase(),
  };

  Pago.findOne({ MedioPago: pagoToUpdate.MedioPago }, (err, pagoFinded) => {
    if (err) {
      res.send({ message: "Error del servidor: " + err });
    } else if (pagoFinded) {
      if (pagoFinded.id !== idToUpdate) {
        res.send({ message: "Medio de Pago ya se encuentra en uso", pago: pagoFinded });
      } else {
        Pago.findByIdAndUpdate(idToUpdate, pagoToUpdate, (err, pagoUpdated) => {
          if (pagoUpdated) {
            res.send({ message: "Pago actualizado satisfactoriamente" });
          } else if (!pagoUpdated) {
            res.send({ message: "Pago no existe" });
          } else {
            res.status(500).send({ message: `Error del servidor: ${err}` });
          }
        });
      }
    } else {
      Pago.findByIdAndUpdate(idToUpdate, pagoToUpdate, (err, pagoUpdated) => {
        if (pagoUpdated) {
          res.send({ message: "Pago actualizado satisfactoriamente" });
        } else if (!pagoUpdated) {
          res.send({ message: "Pago no existe" });
        } else {
          res.status(500).send({ message: `Error del servidor: ${err}` });
        }
      });
    }
  });
};

//EndPoint para eliminar Pago
const deletePago = (req, res) => {
  const idToDelete = req.params.id;
  Pago.findByIdAndRemove({ _id: idToDelete }, (err, pagoDeleted) => {
    if (err) {
      res.send({ message: "Error del servidor: " + err });
    } else if (pagoDeleted) {
      res.send({ message: "Pago elimando con exito" });
    } else {
      res.send({ message: "Pago no encontrado " });
    }
  });
};

//EndPoint para obtener todos los Pago
const getAllPagos = (req, res) => {
  Pago.find({}, function (err, pagoDocs) {
    if (err) {
      res.status(500).send({ message: "Error del servidor: " + err });
    } else if (!pagoDocs) {
      res.status(404).send({ message: "Colección sin documentos" });
    } else {
      res.status(200).send({ pago: pagoDocs });
    }
  });
};

module.exports = {
  createPago,
  editPago,
  deletePago,
  getAllPagos,
};
