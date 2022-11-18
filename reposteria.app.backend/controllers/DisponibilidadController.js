const Disponibilidad = require("../models/DisponibilidadModel");

//EndPoint para crear Disponibilidad
const createDisponibilidad = (req, res) => {
  const { body } = req;  
  const newDisponibilidad = new Disponibilidad({
    NombreChef: body.NombreChef,
    Estado: body.Estado,
  }); 

  // opcion 4
  Disponibilidad.findOne({ NombreChef: newDisponibilidad.NombreChef }, (err, disponibilidadFinded) => {
    if (disponibilidadFinded) {
      res.send({ message: "Disponible ya existe" });
    } else if (!disponibilidadFinded) {
      if (err) {
        res.send({ message: "Error del servidor: " + err });
      } else {
        // opcion 4 guardando un Disponibilidad con el formato tipo callback
        newDisponibilidad.save((err, disponibilidadStored) => {
          if (disponibilidadStored) {
            res.send({
              message: "Disponibilidad creado con exito",
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

//EndPoint para crear editar Disponibilidad
const editDisponibilidad = (req, res) => {
  const idToUpdate = req.params.id;
  const { body } = req;
  const disponibilidadToUpdate = {
    NombreChef: body.NombreChef,
    Estado: body.Estado,   
  };

  Disponibilidad.findOne({ NombreChef: disponibilidadToUpdate.NombreChef }, (err, disponibilidadFinded) => {
    if (err) {
      res.send({ message: "Error del servidor: " + err });
    } else if (disponibilidadFinded) {
      if (disponibilidadFinded.id !== idToUpdate) {
        res.send({ message: "Nombre del Chef ya se encuentra en uso", disponibilidad: disponibilidadFinded });
      } else {
        Disponibilidad.findByIdAndUpdate(idToUpdate, disponibilidadToUpdate, (err, disponibilidadUpdated) => {
          if (disponibilidadUpdated) {
            res.send({ message: "Disponible actualizado satisfactoriamente" });
          } else if (!disponibilidadUpdated) {
            res.send({ message: "Disponible no existe" });
          } else {
            res.status(500).send({ message: `Error del servidor: ${err}` });
          }
        });
      }
    } else {
      Disponibilidad.findByIdAndUpdate(idToUpdate, disponibilidadToUpdate, (err, disponibilidadUpdated) => {
        if (disponibilidadUpdated) {
          res.send({ message: "Disponible actualizado satisfactoriamente" });
        } else if (!disponibilidadUpdated) {
          res.send({ message: "Disponible no existe" });
        } else {
          res.status(500).send({ message: `Error del servidor: ${err}` });
        }
      });
    }
  });
};

//EndPoint para eliminar Disponibilidad
const deleteDisponibilidad = (req, res) => {
  const idToDelete = req.params.id;
  Disponibilidad.findByIdAndRemove({ _id: idToDelete }, (err, disponibilidadDeleted) => {
    if (err) {
      res.send({ message: "Error del servidor: " + err });
    } else if (disponibilidadDeleted) {
      res.send({ message: "Disponible elimando con exito" });
    } else {
      res.send({ message: "Disponible no encontrado " });
    }
  });
};

//EndPoint para obtener todos los Disponibles
const getAllDisponibles = (req, res) => {
  Disponibilidad.find({}, function (err, disponibilidadDocs) {
    if (err) {
      res.status(500).send({ message: "Error del servidor: " + err });
    } else if (!disponibilidadDocs) {
      res.status(404).send({ message: "Colección sin documentos" });
    } else {
      res.status(200).send({ disponibilidad: disponibilidadDocs });
    }
  });
};

module.exports = {
  createDisponibilidad,
  editDisponibilidad,
  deleteDisponibilidad,
  getAllDisponibles,
};
