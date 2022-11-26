import React from "react";

const Conózcanos = () => {
  // const { nombre, apellido, user } = props //desestructuracion del objeto props

  return(
<>
{/* <!-- Carousel --> */}
<div id="demo" class="carousel slide" data-bs-ride="carousel">

  {/* <!-- Indicators/dots --> */}
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
  </div>
  
  {/* <!-- The slideshow/carousel --> */}
  <div class="carousel-inner">
  <div class="container-sm">.container-sm
    <div class="carousel-item active">
      <img src="./img/postre1.jpg" alt="postre1" class="d-block"/>
    </div>
    <div class="carousel-item">
      <img src="./img/postre2.jpg" alt="postre2" class="d-block"/>
    </div>
    <div class="carousel-item">
      <img src="./img/postre3.jpg" alt="postre3" class="d-block" />
    </div>
  </div>
  
  {/* <!-- Left and right controls/icons --> */}
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
  </div>
</div>

<div class="container mt-5">
  <div class="row">
    <div class="col-sm-4">
      <h2>VISIÓN</h2>
      <p>En DomiRepost nos esforzamos por ser una de las mejores empresas en
        Bogotá D.C Colombia en el desarrollo de comercio digital de repostería y
        entrega a domicilio de los pedidos, para ofrecer siempre a nuestros
        clientes las mejores soluciones para sus gustos. No basta con crear un
        pedido online, nosotros queremos mejorarlo, hacerlo eficiente, lograr un
        diseño adecuado y personal y conseguir que todas las personas que
        confían en nosotros obtengan el mejor producto con los mejores
        entandares de calidad y de los mejores profesionales.</p>
      
    </div>
    <div class="col-sm-4">
      <h3>MISIÓN</h3>
      <p>Satisfacer las necesidades de los clientes y lograr que sus pedidos sea
        de manera oportuna y con una muy buena calidad y es evidentemente, que
        es uno de los principales objetivos de DomiRepost. Sin embargo, nuestra
        labor va mucho más allá. Nos gusta estar cerca del cliente, intercambiar
        opiniones, ideas, hablar sobre gustos, para ayudarle a tomar la mejor
        opción que necesite.</p>
      </div>
    <div class="col-sm-4">
      <h3>OBJETIVOS</h3>        
      <p>Nuestro objetivo es que nuestros clientes se sientan satisfechos con
        nuestro trabajo y que confíen en nosotros para brindarles todas las
        tendencias, nuevas técnicas y todo lo que tenga que ver con este bello
        mundo de la Repostería Online. Estamos trabajado muy duro para conseguir
        destacar a nivel nacional a suplir esta necesidad. Por ello, mantenernos
        en ese nivel nos lleva a esforzarnos más cada día.</p>
      </div>
  </div>
</div>
</>

  );
};

export default Conózcanos;


