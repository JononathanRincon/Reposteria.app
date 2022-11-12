import { Link } from "react-router-dom";
import "../IndexApp.css";
const NavBar = () => {
  //Creacion del array que contiene los datos de los navItems
  const navItems = [
    { ruta: "/", icono: "bi bi-house", texto: "Home" },
    { ruta: "/contador", icono: "bi bi-calculator", texto: "Contador" },
    { ruta: "/saludo", icono: "bi bi-hand-thumbs-up", texto: "Saludo" },
  ];

  return (
    <>
      <nav className="barra">
        <div className="">
          <ul className="">
            {/* usamos el metodo map en el array navItems para renderizar la barra de navegacion */}
            { navItems.map( ( {ruta, icono, texto} ) => {
              return (
                <li className="">
                  <Link className="" to={ ruta }>
                    <i className={ icono }></i>
                    { texto }
                  </Link>
                </li>
              );
            }) }            
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
