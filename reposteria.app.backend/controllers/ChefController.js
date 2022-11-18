const Chef = require("../models/ChefModel");

//EndPoint para crear Chef
const createChef = (req, res) => {
  const { body } = req;
  const newChef = new Chef({
    Nombre: body.Nombre,
    apellido: body.apellido,
    NumTelefono: body.NumTelefono,
    Correo: body.Correo.toLowerCase(),
  }); 

  // opcion 4
  Chef.findOne({ Correo: newChef.Correo }, (err, chefFinded) => {
    if (chefFinded) {
      res.send({ message: "Chef ya existe" });
    } else if (!chefFinded) {
      if (err) {
        res.send({ message: "Error del servidor: " + err });
      } else {
        // opcion 4 guardando un chef con el formato tipo callback
        newChef.save((err, chefStored) => {
          if (chefStored) {
            res.send({
              message: "Chef creado con exito",
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

//EndPoint para crear editar Chef
const editChef = (req, res) => {
  const idToUpdate = req.params.id;
  const { body } = req;
  const ChefToUpdate = {
    Nombre: body.Nombre,
    apellido: body.apellido,
    NumTelefono: body.NumTelefono,
    Correo: body.Correo.toLowerCase(),
  };

  Chef.findOne({ Correo: chefToUpdate.Correo }, (err, chefFinded) => {
    if (err) {
      res.send({ message: "Error del servidor: " + err });
    } else if (achefFinded) {
      if (chefFinded.id !== idToUpdate) {
        res.send({ message: "Correo ya se encuentra en uso", chef: chefFinded });
      } else {
        Chef.findByIdAndUpdate(idToUpdate, chefToUpdate, (err, chefUpdated) => {
          if (chefUpdated) {
            res.send({ message: "Chef actualizado satisfactoriamente" });
          } else if (!chefUpdated) {
            res.send({ message: "Chef no existe" });
          } else {
            res.status(500).send({ message: `Error del servidor: ${err}` });
          }
        });
      }
    } else {
      Chef.findByIdAndUpdate(idToUpdate, chefToUpdate, (err, chefUpdated) => {
        if (chefUpdated) {
          res.send({ message: "Chef actualizado satisfactoriamente" });
        } else if (!chefUpdated) {
          res.send({ message: "Chef no existe" });
        } else {
          res.status(500).send({ message: `Error del servidor: ${err}` });
        }
      });
    }
  });
};

//EndPoint para eliminar Chef
const deleteChef = (req, res) => {
  const idToDelete = req.params.id;
  Chef.findByIdAndRemove({ _id: idToDelete }, (err, chefDeleted) => {
    if (err) {
      res.send({ message: "Error del servidor: " + err });
    } else if (chefDeleted) {
      res.send({ message: "Chef elimando con exito" });
    } else {
      res.send({ message: "Chef no encontrado " });
    }
  });
};

//EndPoint para obtener todos los Chef
const getAllChef = (req, res) => {
  Chef.find({}, function (err, chefDocs) {
    if (err) {
      res.status(500).send({ message: "Error del servidor: " + err });
    } else if (!chefDocs) {
      res.status(404).send({ message: "Colección sin documentos" });
    } else {
      res.status(200).send({ chef: chefDocs });
    }
  });
};

module.exports = {
  createChef,
  editChef,
  deleteChef,
  getAllChef,
};
