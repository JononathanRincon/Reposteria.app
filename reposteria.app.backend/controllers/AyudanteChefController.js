const AyudanteChef = require("../models/AyudanteChefModel");

//EndPoint para crear AyudanteChef
const createAyudanteChef = (req, res) => {
  const { body } = req;  
  const newAyudanteChef = new AyudanteChef({
    Identificacion: body.Identificacion,
    Nombre: body.Nombre,
    Apellido: body.Apellido,
    NumTelefono: body.NumTelefono,
    Correo: body.Correo.toLowerCase(),
    Direccion: body.Direccion,
  }); 

  // opcion 4
  AyudanteChef.findOne({ Identificacion: newAyudanteChef.Identificacion }, (err, ayudanteChefFinded) => {
    if (ayudanteChefFinded) {
      res.send({ message: "Ayudante Chef ya existe" });
    } else if (!ayudanteChefFinded) {
      if (err) {
        res.send({ message: "Error del servidor: " + err });
      } else {
        // opcion 4 guardando un Ayudante Chef con el formato tipo callback
        newAyudanteChef.save((err, ayudanteChefStored) => {
          if (ayudanteChefStored) {
            res.send({
              message: "Ayudante Chef creado con exito",
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

//EndPoint para crear editar Ayudante Chef
const editAyudanteChef = (req, res) => {
  const idToUpdate = req.params.id;
  const { body } = req;
  const ayudanteChefToUpdate = {
    Identificacion: body.Identificacion,
    Nombre: body.Nombre,
    Apellido: body.Apellido,
    NumTelefono: body.NumTelefono,
    Correo: body.Correo.toLowerCase(),
    Direccion: body.Direccion,    
  };

  AyudanteChef.findOne({ Identificacion: ayudanteChefToUpdate.Identificacion }, (err, ayudanteChefFinded) => {
    if (err) {
      res.send({ message: "Error del servidor: " + err });
    } else if (ayudanteChefFinded) {
      if (ayudanteChefFinded.id !== idToUpdate) {
        res.send({ message: "Identificacion ya se encuentra en uso", ayudanteChef: ayudanteChefFinded });
      } else {
        AyudanteChef.findByIdAndUpdate(idToUpdate, ayudanteChefToUpdate, (err, ayudanteChefUpdated) => {
          if (ayudanteChefUpdated) {
            res.send({ message: "Ayudante Chef actualizado satisfactoriamente" });
          } else if (!ayudanteChefUpdated) {
            res.send({ message: "Ayudante Chef no existe" });
          } else {
            res.status(500).send({ message: `Error del servidor: ${err}` });
          }
        });
      }
    } else {
      AyudanteChef.findByIdAndUpdate(idToUpdate, ayudanteChefToUpdate, (err, ayudanteChefUpdated) => {
        if (ayudanteChefUpdated) {
          res.send({ message: "Ayudante Chef actualizado satisfactoriamente" });
        } else if (!ayudanteChefUpdated) {
          res.send({ message: "Ayudante Chef no existe" });
        } else {
          res.status(500).send({ message: `Error del servidor: ${err}` });
        }
      });
    }
  });
};

//EndPoint para eliminar Ayudante Chef
const deleteAyudanteChef = (req, res) => {
  const idToDelete = req.params.id;
  AyudanteChef.findByIdAndRemove({ _id: idToDelete }, (err, ayudanteChefDeleted) => {
    if (err) {
      res.send({ message: "Error del servidor: " + err });
    } else if (ayudanteChefDeleted) {
      res.send({ message: "Ayudante Chef elimando con exito" });
    } else {
      res.send({ message: "Ayudante Chef no encontrado " });
    }
  });
};

//EndPoint para obtener todos los Ayudante Chef
const getAllAyudanteChef = (req, res) => {
  AyudanteChef.find({}, function (err, ayudanteChefDocs) {
    if (err) {
      res.status(500).send({ message: "Error del servidor: " + err });
    } else if (!ayudanteChefDocs) {
      res.status(404).send({ message: "Colección sin documentos" });
    } else {
      res.status(200).send({ ayudanteChef: ayudanteChefDocs });
    }
  });
};

module.exports = {
  createAyudanteChef,
  editAyudanteChef,
  deleteAyudanteChef,
  getAllAyudanteChef,
};
