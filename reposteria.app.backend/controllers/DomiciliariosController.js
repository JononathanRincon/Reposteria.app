const Domiciliarios = require("../models/DomiciliariosModel");

//EndPoint para crear Domiciliarios
const createDomiciliario = (req, res) => {
  const { body } = req;  
  const newDomiciliarios = new Domiciliarios({
    Nombre: body.Nombre,
    Apellido: body.Apellido,
    NumTelefono: body.NumTelefono,
    Correo: body.Correo.toLowerCase(),
  }); 

  // opcion 4
  Domiciliarios.findOne({ Correo: newDomiciliarios.Correo }, (err, domiciliariosFinded) => {
    if (domiciliariosFinded) {
      res.send({ message: "Domiciliario ya existe" });
    } else if (!domiciliariosFinded) {
      if (err) {
        res.send({ message: "Error del servidor: " + err });
      } else {
        // opcion 4 guardando un Domiciliario con el formato tipo callback
        newDomiciliarios.save((err, domiciliariosStored) => {
          if (domiciliariosStored) {
            res.send({
              message: "Domiciliario creado con exito",
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

//EndPoint para crear editar Domiciliario
const editDomiciliario = (req, res) => {
  const idToUpdate = req.params.id;
  const { body } = req;
  const domiciliariosToUpdate = {
    Nombre: body.Nombre,
    Apellido: body.Apellido,
    NumTelefono: body.NumTelefono,
    Correo: body.Correo.toLowerCase(),
  };

  Domiciliarios.findOne({ Correo: domiciliariosToUpdate.Correo }, (err, domiciliariosFinded) => {
    if (err) {
      res.send({ message: "Error del servidor: " + err });
    } else if (domiciliariosFinded) {
      if (domiciliariosFinded.id !== idToUpdate) {
        res.send({ message: "Correo ya se encuentra en uso", domiciliarios: domiciliariosFinded });
      } else {
        Domiciliarios.findByIdAndUpdate(idToUpdate, domiciliariosToUpdate, (err, domiciliariosUpdated) => {
          if (domiciliariosUpdated) {
            res.send({ message: "Domiciliario actualizado satisfactoriamente" });
          } else if (!domiciliariosUpdated) {
            res.send({ message: "Domiciliario no existe" });
          } else {
            res.status(500).send({ message: `Error del servidor: ${err}` });
          }
        });
      }
    } else {
      Domiciliarios.findByIdAndUpdate(idToUpdate, domiciliariosToUpdate, (err, domiciliariosUpdated) => {
        if (domiciliariosUpdated) {
          res.send({ message: "Domiciliario actualizado satisfactoriamente" });
        } else if (!domiciliariosUpdated) {
          res.send({ message: "Domiciliario no existe" });
        } else {
          res.status(500).send({ message: `Error del servidor: ${err}` });
        }
      });
    }
  });
};

//EndPoint para eliminar Domiciliario
const deleteDomiciliario = (req, res) => {
  const idToDelete = req.params.id;
  Domiciliarios.findByIdAndRemove({ _id: idToDelete }, (err, domiciliariosDeleted) => {
    if (err) {
      res.send({ message: "Error del servidor: " + err });
    } else if (domiciliariosDeleted) {
      res.send({ message: "Domiciliario elimando con exito" });
    } else {
      res.send({ message: "Domiciliario no encontrado " });
    }
  });
};

//EndPoint para obtener todos los Domiciliarios
const getAllDomiciliarios = (req, res) => {
  Domiciliarios.find({}, function (err, domiciliariosDocs) {
    if (err) {
      res.status(500).send({ message: "Error del servidor: " + err });
    } else if (!domiciliariosDocs) {
      res.status(404).send({ message: "Colección sin documentos" });
    } else {
      res.status(200).send({ domiciliarios: domiciliariosDocs });
    }
  });
};

module.exports = {
  createDomiciliario,
  editDomiciliario,
  deleteDomiciliario,
  getAllDomiciliarios,
};
