import React from "react";

const Carrito = () =>{
  return(
    <div class="container-fluid">


    <div class="Titulo">
        <h1><strong>Carrito🛒</strong></h1>
    </div>
    <div id="hr">
        <hr/>
    </div>
    <div class="row">
        <div class="col-8">
            <div class="row">
                <div class="col-3">
                    <img src="./img/postre1.jpg" alt="" width="130px" height="140px"/>
                </div>
                <div class="col-5">
                    <p><strong> Nombre: </strong> </p>
                    <p><strong> Valor Und: </strong> </p>
                    <p><strong> SubTotal: </strong> </p>
                </div>
                <div class="col-3">
                    <div class="contador">
                        <form action="" method="post">
                            <button type="submit">-</button>
                            <input type="number" name="Numero" id="Numero" />
                            <button  type="submit">+</button>
                        </form>

                    </div>

                </div>
            </div>



            <div id="hr">
                <hr/>
            </div>

        </div>
        <div class="col-4">
            <form action="" method="post">
                <h4>Resumen Compra</h4>
                <p><strong>Total: </strong> $ </p>
                <p><strong>Metodo Pago:</strong></p>
                <select name="MetodoPago" id="MetodoPago">
                    <option value="ContraEntrega"> Contra Entrega</option>
                    <option value="TarjetaCredito"> TarjetaCredito</option>
                    <option value="Paypal">Paypal</option>
                </select>
                <input type="submit" value="Realizar el pago"/>
            </form>
        </div>
    </div>

</div>

  ); 
};

export default Carrito;