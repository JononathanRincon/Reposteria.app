const express = require('express')
const router = express.Router()
const { createUser, editUser, deleteUser, getAllUsers, userLogin } = require ('../controllers/UserController')
const { createAdministrador, editAdministrador, deleteAdministrador, getAllAdministradores} = require ('../controllers/AdministradorController')
const { createCliente, editCliente, deleteCliente, getAllClientes} = require ('../controllers/ClienteController')
const { createDisponibilidad, editDisponibilidad, deleteDisponibilidad, getAllDisponibles} = require ('../controllers/DisponibilidadController')
const { createDomiciliario, editDomiciliario, deleteDomiciliario, getAllDomiciliarios} = require ('../controllers/DomiciliariosController')
const { createProducto, editProducto, deleteProducto, getAllProductos} = require ('../controllers/ProductosController')
const { createPago, editPago, deletePago, getAllPagos} = require ('../controllers/PagosController')
const { createPedido, getAllPedidos} = require ('../controllers/PedidosController')
const { createChef, editChef, deleteChef, getAllChef} = require ('../controllers/ChefController')
const { createAyudanteChef, editAyudanteChef, deleteAyudanteChef, getAllAyudanteChef} = require ('../controllers/AyudanteChefController')


//Ruta de prueba
router.get("/", (req, res) => {
  res.send("<h1>Hello World!!!! My First API Rest</h1>");
});

//Operaciones CRUD Usuario
router.post("/createUser", createUser);
router.get("/getAllUsers", getAllUsers);
router.put("/update-user/:id", editUser);
router.delete("/delete-user/:id", deleteUser);

//Ruta para el login de usuario...ToDo
router.post('/login', userLogin)

//Operaciones CRUD Administrador
router.post("/createAdministrador", createAdministrador);
router.get("/getAllAdministrador", getAllAdministradores);
router.put("/update-administrador/:id", editAdministrador);
router.delete("/delete-administrador/:id", deleteAdministrador);

//Operaciones CRUD Cliente
router.post("/createcliente", createCliente);
router.get("/getAllcliente", getAllClientes);
router.put("/update-cliente/:id", editCliente);
router.delete("/delete-cliente/:id", deleteCliente);

//Operaciones CRUD Disponibilidad
router.post("/createDisponibilidad", createDisponibilidad);
router.get("/getAllDisponibilidad", getAllDisponibles);
router.put("/update-disponibilidad/:id", editDisponibilidad);
router.delete("/delete-disponibilidad/:id", deleteDisponibilidad);

//Operaciones CRUD Domiciliarios
router.post("/createDomiciliario", createDomiciliario);
router.get("/getAllDomiciliarios", getAllDomiciliarios);
router.put("/update-domiciliario/:id", editDomiciliario);
router.delete("/delete-domiciliario/:id", deleteDomiciliario);

//Operaciones CRUD Productos
router.post("/createProducto", createProducto);
router.get("/getAllProductos", getAllProductos);
router.put("/update-producto/:id", editProducto);
router.delete("/delete-producto/:id", deleteProducto);

//Operaciones CRUD Pedidos
router.post("/createPedido", createPedido);
router.get("/getAllPedidos", getAllPedidos);

//Operaciones CRUD Pago
router.post("/createPago", createPago);
router.get("/getAllPagos", getAllPagos);
router.put("/update-pago/:id", editPago);
router.delete("/delete-pago/:id", deletePago);

//Operaciones CRUD Chef
router.post("/createChef", createChef);
router.get("/getAllChef", getAllChef);
router.put("/update-chef/:id", editChef);
router.delete("/delete-chef/:id", deleteChef);

//Operaciones CRUD AyudanteChef
router.post("/createAyudanteChef", createAyudanteChef);
router.get("/getAllAyudanteChef", getAllAyudanteChef);
router.put("/update-ayudanteChef/:id", editAyudanteChef);
router.delete("/delete-ayudanteChef/:id", deleteAyudanteChef);

module.exports = router
