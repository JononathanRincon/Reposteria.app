
import NavItems from "./NavItems";

const NavBar = () => {
  //Creacion del array que contiene los datos de los navItems
  const navItemsLeft = [
    { ruta: "/", icono: "bi bi-house", texto: "Home" },
    { ruta: "/productos", icono: "bi bi-clipboard2-check", texto: "Productos" },
    { ruta: "/Conózcanos", icono: "bi bi-bag-heart", texto: "Conózcanos" }, 
  ];

  const navItemsRight = [
    {ruta: "/carrito",icono: "bi bi-cart-check", texto:"Carrito"},
    {ruta: "/register", icono: "bi bi-box-arrow-in-right", texto: "Register"},
    {ruta: "/login", icono: "bi bi-person", texto: "Login"}
  ]

  return (
    <>
      <nav className="navbar navbar-expand-sm barra">
        <div className="container-fluid">
          DomiRepost
          <ul className="navbar-nav texto-nav">
            {/* usamos el metodo map en el array navItems para renderizar la barra de navegacion */}
            <NavItems items = { navItemsLeft } />
          </ul>
        </div>
        <div className="container-fluid" style={{ justifyContent: 'end' }}>
          <ul className="navbar-nav texto-nav">
            <NavItems items = { navItemsRight } />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
