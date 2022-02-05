import React from "react";
import Boton from "../styles/components/Boton";
import ContenedorProductos from "../styles/components/ContenedorProductos";
import Producto from "../styles/components/Producto";

const Productos = ({productos,agregarProductoAlCarrito}) => {
  

  return (
    <div>
      <h3>Productos</h3>
      <ContenedorProductos>
          {productos.map((producto,index)=>{
              return(
                  <Producto key={index}>
                      <p>{producto.nombre}</p>
                      <Boton onClick={()=>agregarProductoAlCarrito(producto.id,producto.nombre)}>Agregar al carrito</Boton>
                  </Producto>
              )
          })}
      </ContenedorProductos>
    </div>
  );
};

export default Productos;
