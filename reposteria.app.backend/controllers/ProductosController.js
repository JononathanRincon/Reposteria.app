const Productos = require("../models/ProductosModel");

//EndPoint para crear Productos
const createProducto = (req, res) => {
  const { body } = req;  
  const newProductos = new Productos({
    Nombre: body.Nombre.toUpperCase(),
    Precio: body.Precio,
    Descripcion: body.Descripcion,
    Tipo: body.Tipo,
  }); 

  // opcion 4
  Productos.findOne({ Nombre: newProductos.Nombre }, (err, productosFinded) => {
    if (productosFinded) {
      res.send({ message: "Producto ya existe" });
    } else if (!productosFinded) {
      if (err) {
        res.send({ message: "Error del servidor: " + err });
      } else {
        // opcion 4 guardando un Producto con el formato tipo callback
        newProductos.save((err, productosStored) => {
          if (productosStored) {
            res.send({
              message: "Producto creado con exito",
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

//EndPoint para crear editar Producto
const editProducto = (req, res) => {
  const idToUpdate = req.params.id;
  const { body } = req;
  const productosToUpdate = {
    Nombre: body.Nombre.toUpperCase(),
    Precio: body.Precio,
    descripcion: body.Descripcion,
    Tipo: body.Tipo,
  };

  Productos.findOne({ Nombre: productosToUpdate.Nombre }, (err, productosFinded) => {
    if (err) {
      res.send({ message: "Error del servidor: " + err });
    } else if (productosFinded) {
      if (productosFinded.id !== idToUpdate) {
        res.send({ message: "Nombre ya se encuentra en uso", productos: productosFinded });
      } else {
        Productos.findByIdAndUpdate(idToUpdate, productosToUpdate, (err, productosUpdated) => {
          if (productosUpdated) {
            res.send({ message: "Producto actualizado satisfactoriamente" });
          } else if (!productosUpdated) {
            res.send({ message: "Producto no existe" });
          } else {
            res.status(500).send({ message: `Error del servidor: ${err}` });
          }
        });
      }
    } else {
      Productos.findByIdAndUpdate(idToUpdate, productosToUpdate, (err, productosUpdated) => {
        if (productosUpdated) {
          res.send({ message: "Producto actualizado satisfactoriamente" });
        } else if (!productosUpdated) {
          res.send({ message: "Producto no existe" });
        } else {
          res.status(500).send({ message: `Error del servidor: ${err}` });
        }
      });
    }
  });
};

//EndPoint para eliminar Producto
const deleteProducto = (req, res) => {
  const idToDelete = req.params.id;
  Productos.findByIdAndRemove({ _id: idToDelete }, (err, productosDeleted) => {
    if (err) {
      res.send({ message: "Error del servidor: " + err });
    } else if (productosDeleted) {
      res.send({ message: "Producto elimando con exito" });
    } else {
      res.send({ message: "Producto no encontrado " });
    }
  });
};

//EndPoint para obtener todos los Productos
const getAllProductos = (req, res) => {
  Productos.find({}, function (err, productosDocs) {
    if (err) {
      res.status(500).send({ message: "Error del servidor: " + err });
    } else if (!productosDocs) {
      res.status(404).send({ message: "Colección sin documentos" });
    } else {
      res.status(200).send({ productos: productosDocs });
    }
  });
};

module.exports = {
  createProducto,
  editProducto,
  deleteProducto,
  getAllProductos,
};
