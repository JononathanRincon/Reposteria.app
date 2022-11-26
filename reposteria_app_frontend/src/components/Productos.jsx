import React from "react";

const Productos = () => {
  return (
    <>
    {/* SECCION PASTELES */}
      <div className="Titulo pt-5 pb-5">
        <h1>Pasteles</h1>
      </div>

      <div className="container">
        <div className="row cards">
          <div className="col-md-6 mb-3">
            <div className="card">
              <a href="DescripcionPasteles.html">
                <img
                  src="img/Pastelcombinado1.jpeg"
                  alt=""
                  className="d-block"
                />
              </a>
              <div className="NombreProducto">
                <h3>Pastel de Vainilla y Chocolate</h3>
                <p>
                  Bañado de 3 leches con relleno y cubierta de chantilly,
                  tapizado con nuez fileteada y cajetoso de chocolate.
                </p>
              </div>
              <div className="BottonComprar">
                <a href="carrito.html">
                  <button id="BtnComprar" name="button" value="">
                    Comprar
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="card">
              <a href="DescripcionPasteles.html">
                <img src="img/Pastel-de-Naranja.jpg" alt="" />
              </a>
              <div className="NombreProducto">
                <h2>Pastel de Naranja</h2>
                <p>
                  Esta receta de Torta de Naranja casera es una versión
                  esponjosa y fácil. El zumo de la naranja hace que la masa sea
                  más ligera que en otros bizcochos, dejando la torta jugosa
                  incluso varios días. Esta receta requiere horno, tiempo
                  aproximado 45 minutos.
                </p>
              </div>
              <div className="BottonComprar">
                <a href="carrito.html">
                  <button id="BtnComprar" name="button" value="">
                    Comprar
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="card">
              <a href="DescripcionPasteles.html">
                <img src="img/PastelPuratos.jpg" alt="" className="d-block" />
              </a>
              <div className="NombreProducto">
                <h2>Pastel Tres Leches</h2>
                <p>
                  El pastel, tarta, o torta de tres leches es un postre
                  tradicional hispanoamericano, pero también conocido en países
                  como Albania, Japón y Corea del Sur. Consiste en un bizcocho
                  bañado con tres tipos de leche: leche evaporada, crema de
                  leche y leche condensada, que le dan su nombre. Suele
                  acompañarse con un merengue de claras de huevo y con cerezas
                  al marraschino y espolvoreado con canela en polvo. Usualmente
                  la receta no lleva mantequilla y por eso tiene una textura
                  esponjosa.
                </p>
                </div>
                <div className="BottonComprar">
                <a href="carrito.html">
                  <button id="BtnComprar" name="button" value="">
                    Comprar
                  </button>
                </a>
                </div>
                </div>
                </div>
                <div className="col-md-6"></div>
                </div>
                </div>
        {/* SECCION DE CUPKAES */}
      <div className="Titulo pt-5 pb-5">
        <h1>Cupkaes</h1>
      </div>

      <div className="container">
        <div className="row cards">
          <div className="col-md-6 mb-3">
            <div className="card">
              <a href="DescripcionPasteles.html">
                <img
                  src="../../img/cup1.jpg" alt=""  className="d-block"
                />
              </a>
              <div className="NombreProducto">
                <h3>Cupcakes de Chocolate</h3>
                <p>
                Un postre ideal para reuniones, ocasiones especiales o cumpleaños, 
                un cupcake se disfruta en todos esos momentos.
                </p>
              </div>
              <div className="BottonComprar">
                <a href="carrito.html">
                  <button id="BtnComprar" name="button" value="">
                    Comprar
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="card">
              <a href="DescripcionPasteles.html">
                <img src="img/Cupkaes vainilla.jpg" alt="" />
              </a>
              <div className="NombreProducto">
                <h2>Cupcakes de Vainilla</h2>
                <p>
                Esta receta de 'cupcakes' es un clásico que no debe faltar en ninguna fiesta de cumpleaños. 
                Dulce, esponjosa y cremosa, perfecta para conquistar a los más pequeños de la casa.
                </p>
              </div>
              <div className="BottonComprar">
                <a href="carrito.html">
                  <button id="BtnComprar" name="button" value="">
                    Comprar
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="card">
              <a href="DescripcionPasteles.html">
                <img src="img/CupkaesFrutosRojos.jpg" alt="" className="d-block" />
              </a>
              <div className="NombreProducto">
                <h2>Cupkaes Frutos Rojos</h2>
                <p>
                Estas frutas son de bajo valor calórico por su escaso aporte de hidratos de carbono. 
                Son especialmente ricas en vitamina C las grosellas negras y las rojas, moras, zarzamoras, arandadno etc, 
                que tienen cantidades mayores que algunos cítricos.
                </p>
              </div>
              <div className="BottonComprar">
                <a href="carrito.html">
                  <button id="BtnComprar" name="button" value="">
                    Comprar
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>

    {/* SECCION DE POSTRES */}
      <div className="Titulo pt-5 pb-5">
        <h1>Postres</h1>
      </div>
      <div className="container">
        <div className="row cards">
          <div className="col-md-6 mb-3">
            <div className="card">
              <a href="DescripcionPasteles.html">
                <img
                  src="img/postre1.jpg" alt=""  className="d-block"
                />
              </a>
              <div className="NombreProducto">
                <h3>Frutos Rojos</h3>
                <p>
                Los más exquisitos sabores del bosque se unen en este rico y delicioso postre,
                   las cerezas, la fresa y la mora crean una combinación mágica que debes probar y 
                   disfrutar hasta el final.
                </p>
              </div>
              <div className="BottonComprar">
                <a href="carrito.html">
                  <button id="BtnComprar" name="button" value="">
                    Comprar
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="card">
              <a href="DescripcionPasteles.html">
                <img src="img/Postre2.jpg" alt="" />
              </a>
              <div className="NombreProducto">
                <h2>Postre de Limón</h2>
                <p>
                Una ralladura de ralladura de limón o un remolino de cuajada de limón pueden levantar 
                instantáneamente cualquier postre y llevarlo de suave a brillante en un segundo.
                No pase por alto esa bolsa de limones en su refrigerador o frutero, 
                conviértalos en algo especial y satisfaga sus antojos de cítricos preparando 
                un postre de limón 
                </p>
              </div>
              <div className="BottonComprar">
                <a href="carrito.html">
                  <button id="BtnComprar" name="button" value="">
                    Comprar
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className="card">
              <a href="DescripcionPasteles.html">
                <img src="img/CupkaesFrutosRojos.jpg" alt="" className="d-block" />
              </a>
              <div className="NombreProducto">
                <h2>Selva Negra</h2>
                <p>
                La tarta o torta Selva Negra (en alemán, Schwarzwälder Kirschtorte)
                es una tarta típica de la cocina de Baden y uno de los dulces más característicos
                de la gastronomía alemana. Está compuesta por varias capas de bizcochuelo
                de chocolate embebido en kirsch e intercaladas con nata y cerezas.
                </p>
              </div>
              <div className="BottonComprar">
                <a href="carrito.html">
                  <button id="BtnComprar" name="button" value="">
                    Comprar
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </>
  );
};
export default Productos;