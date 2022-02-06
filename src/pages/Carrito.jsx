import React from "react";
import Boton from "../styles/components/Boton";
import { connect } from "react-redux";

const Carrito = ({carrito,setCarrito}) => {
const vaciarCarrito=()=>{
    
setCarrito([])
}
  return (
    <div>
      <h1>carrito</h1>
      {carrito.length > 0
       ? 
       (
        carrito.map((producto, index) => {
          return(
              <div key={index}>
                  <p>nombre: {producto.nombre}</p>
                    <p> cantidad :{producto.cantidad}</p>
              </div>
          ) 
        })
      
        )  
        : 
        (
            <p>aun no hay productos en el carro</p>
            )}

            <Boton onClick={vaciarCarrito}>vaciar carrito</Boton>
          
    </div>

  );
};

const mapStateToProps = (estado) => {
  return {
    carrito:estado.carrito
  }
}

export default connect(mapStateToProps)(Carrito)
