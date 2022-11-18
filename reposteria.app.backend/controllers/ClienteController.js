const Cliente = require("../models/ClienteModel");

//EndPoint para crear Cliente
const createCliente = (req, res) => {
  const { body } = req;  
  const newCliente = new Cliente({
    Identificacion: body.Identificacion,
    Nombre: body.Nombre,
    Apellido: body.Apellido,
    NumTelefono: body.NumTelefono,
    Correo: body.Correo.toLowerCase(),
    Direccion: body.Direccion,
  }); 

  // opcion 4
  Cliente.findOne({ Identificacion: newCliente.Identificacion }, (err, clienteFinded) => {
    if (clienteFinded) {
      res.send({ message: "Cliente ya existe" });
    } else if (!clienteFinded) {
      if (err) {
        res.send({ message: "Error del servidor: " + err });
      } else {
        // opcion 4 guardando un Cliente con el formato tipo callback
        newCliente.save((err, clienteStored) => {
          if (clienteStored) {
            res.send({
              message: "Cliente creado con exito",
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

//EndPoint para crear editar Cliente
const editCliente = (req, res) => {
  const idToUpdate = req.params.id;
  const { body } = req;
  const clienteToUpdate = {
    Identificacion: body.Identificacion,
    Nombre: body.Nombre,
    Apellido: body.Apellido,
    NumTelefono: body.NumTelefono,
    Correo: body.Correo.toLowerCase(),
    Direccion: body.Direccion,    
  };

  Cliente.findOne({ Identificacion: clienteToUpdate.Identificacion }, (err, clienteFinded) => {
    if (err) {
      res.send({ message: "Error del servidor: " + err });
    } else if (clienteFinded) {
      if (clienteFinded.id !== idToUpdate) {
        res.send({ message: "Identificacion ya se encuentra en uso", cliente: clienteFinded });
      } else {
        Cliente.findByIdAndUpdate(idToUpdate, clienteToUpdate, (err, clienteUpdated) => {
          if (clienteUpdated) {
            res.send({ message: "Cliente actualizado satisfactoriamente" });
          } else if (!clienteUpdated) {
            res.send({ message: "Cliente no existe" });
          } else {
            res.status(500).send({ message: `Error del servidor: ${err}` });
          }
        });
      }
    } else {
      Cliente.findByIdAndUpdate(idToUpdate, clienteToUpdate, (err, clienteUpdated) => {
        if (clienteUpdated) {
          res.send({ message: "Cliente actualizado satisfactoriamente" });
        } else if (!clienteUpdated) {
          res.send({ message: "Cliente no existe" });
        } else {
          res.status(500).send({ message: `Error del servidor: ${err}` });
        }
      });
    }
  });
};

//EndPoint para eliminar Cliente
const deleteCliente = (req, res) => {
  const idToDelete = req.params.id;
  Cliente.findByIdAndRemove({ _id: idToDelete }, (err, clienteDeleted) => {
    if (err) {
      res.send({ message: "Error del servidor: " + err });
    } else if (clienteDeleted) {
      res.send({ message: "Cliente elimando con exito" });
    } else {
      res.send({ message: "Cliente no encontrado " });
    }
  });
};

//EndPoint para obtener todos los Cliente
const getAllClientes = (req, res) => {
  Cliente.find({}, function (err, clienteDocs) {
    if (err) {
      res.status(500).send({ message: "Error del servidor: " + err });
    } else if (!clienteDocs) {
      res.status(404).send({ message: "Colección sin documentos" });
    } else {
      res.status(200).send({ cliente: clienteDocs });
    }
  });
};

module.exports = {
  createCliente,
  editCliente,
  deleteCliente,
  getAllClientes,
};
