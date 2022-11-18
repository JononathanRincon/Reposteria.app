const Pedidos = require("../models/PedidosModel");

//EndPoint para crear Pedidos
const createPedido = (req, res) => {
  const { body } = req;  
  const newPedidos = new Pedidos({
    FechaSolicitud: body.FechaSolicitud,
    FechaEntrega: body.FechaEntrega,
    Cliente_Id: body.Cliente_Id,
    Cantidad: body.Cantidad,
    EntregaRealizada: body.EntregaRealizada,
    HoraEntrega: body.HoraEntrega,
    Pago_Id: body.Pago_Id,
    Producto_Id: body.Producto_Id,
  }); 

  // opcion 4
  Pedidos.findOne({ Cliente_Id: newPedidos.Cliente_Id, FechaSolicitud: newPedidos.FechaSolicitud, Producto_Id: newPedidos.Producto_Id}, (err, pedidosFinded) => {
    if (pedidosFinded) {
      res.send({ message: "Pedido ya existe" });
    } else if (!pedidosFinded) {
      if (err) {
        res.send({ message: "Error del servidor: " + err });
      } else {
        // opcion 4 guardando un Pedido con el formato tipo callback
        newPedidos.save((err, pedidosStored) => {
          if (pedidosStored) {
            res.send({
              message: "Pedido creado con exito",
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


//EndPoint para obtener todos los Pedidos
const getAllPedidos = (req, res) => {
  Pedidos.find({}, function (err, pedidosDocs) {
    if (err) {
      res.status(500).send({ message: "Error del servidor: " + err });
    } else if (!pedidosDocs) {
      res.status(404).send({ message: "Colección sin documentos" });
    } else {
      res.status(200).send({ pedidos: pedidosDocs });
    }
  });
};

module.exports = {
  createPedido,  
  getAllPedidos,
};
