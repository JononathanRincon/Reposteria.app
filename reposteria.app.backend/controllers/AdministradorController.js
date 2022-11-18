const Administrador = require("../models/AdministradorModel");

//EndPoint para crear Administrador
const createAdministrador = (req, res) => {
  const { body } = req;
  // const { firstname, lastname, email, password } = body
  const newAdministrador = new Administrador({
    Nombre: body.Nombre,
    apellido: body.apellido,
    NumTelefono: body.NumTelefono,
    Correo: body.Correo.toLowerCase(),
  }); 

  // opcion 4
  Administrador.findOne({ Correo: newAdministrador.Correo }, (err, administradorFinded) => {
    if (administradorFinded) {
      res.send({ message: "Administrador ya existe" });
    } else if (!administradorFinded) {
      if (err) {
        res.send({ message: "Error del servidor: " + err });
      } else {
        // opcion 4 guardando un Administrador con el formato tipo callback
        newAdministrador.save((err, administradorStored) => {
          if (administradorStored) {
            res.send({
              message: "Administrador creado con exito",
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

//EndPoint para crear editar Administrador
const editAdministrador = (req, res) => {
  const idToUpdate = req.params.id;
  const { body } = req;
  const AdministradorToUpdate = {
    Nombre: body.Nombre,
    apellido: body.apellido,
    NumTelefono: body.NumTelefono,
    Correo: body.Correo.toLowerCase(),
  };

  Administrador.findOne({ Correo: administradorToUpdate.Correo }, (err, administradorFinded) => {
    if (err) {
      res.send({ message: "Error del servidor: " + err });
    } else if (administradorFinded) {
      if (administradorFinded.id !== idToUpdate) {
        res.send({ message: "Correo ya se encuentra en uso", administrador: administradorFinded });
      } else {
        Administrador.findByIdAndUpdate(idToUpdate, administradorToUpdate, (err, administradorUpdated) => {
          if (administradorUpdated) {
            res.send({ message: "Administrador actualizado satisfactoriamente" });
          } else if (!administradorUpdated) {
            res.send({ message: "Administrador no existe" });
          } else {
            res.status(500).send({ message: `Error del servidor: ${err}` });
          }
        });
      }
    } else {
      Administrador.findByIdAndUpdate(idToUpdate, administradorToUpdate, (err, administradorUpdated) => {
        if (administradorUpdated) {
          res.send({ message: "Administrador actualizado satisfactoriamente" });
        } else if (!administradorUpdated) {
          res.send({ message: "Administrador no existe" });
        } else {
          res.status(500).send({ message: `Error del servidor: ${err}` });
        }
      });
    }
  });
};

//EndPoint para eliminar Administrador
const deleteAdministrador = (req, res) => {
  const idToDelete = req.params.id;
  Administrador.findByIdAndRemove({ _id: idToDelete }, (err, administradorDeleted) => {
    if (err) {
      res.send({ message: "Error del servidor: " + err });
    } else if (administradorDeleted) {
      res.send({ message: "Administrador elimando con exito" });
    } else {
      res.send({ message: "Administrador no encontrado " });
    }
  });
};

//EndPoint para obtener todos los Administrador
const getAllAdministradores = (req, res) => {
  Administrador.find({}, function (err, administradorDocs) {
    if (err) {
      res.status(500).send({ message: "Error del servidor: " + err });
    } else if (!administradorDocs) {
      res.status(404).send({ message: "Colección sin documentos" });
    } else {
      res.status(200).send({ administrador: administradorDocs });
    }
  });
};

module.exports = {
  createAdministrador,
  editAdministrador,
  deleteAdministrador,
  getAllAdministradores,
};
