const estadoInicial = {
  productos: [
    { id: 1, nombre: "producto a" },
    { id: 2, nombre: "producto y" },
    { id: 3, nombre: "producto c" },
    { id: 4, nombre: "producto d" },
  ],
  carrito: [],
};

const reducerr = (estado = estadoInicial, accion) => {
  switch (accion.type) {
    case "AGREGAR_PRODUCTO_AL:CARRITO":
      const { idProductoAgregar, nombre } = accion;

      if (estado.carrito.length === 0)
        return {
          ...estado,
          carrito: [{ id: idProductoAgregar, nombre: nombre, cantidad: 1 }],
        };
        else{
             //de otra forma tenemos q revisar que el carrito no tenga ya el porducto
      //si ya lo tiene entonces queremos que actualie su valor
      //si no tiene el producto entonces lo agregamos

      //para poe¡der editar el arreglo tenemos que clonarlo
      const nuevoCarrito = [...estado.carrito];
      //comprobamos si el carrito tiene el id de el producto a agregar
      const yaEstaEnCariito =
        nuevoCarrito.filter((productoDeCarrito) => {
          return productoDeCarrito.id === idProductoAgregar;
        }).length > 0;

      // Si ya tiene el producto entonces lo tenemos que actualizar.
      if (yaEstaEnCariito) {
        //para ello tenemos que buscarlo,obtener su posicion en el arreglo
        //y en base a su posicio ya actualizamos el valor
        nuevoCarrito.forEach((productoDeCarrito, index) => {
          if (productoDeCarrito.id === idProductoAgregar) {
            const cantidad = nuevoCarrito[index].cantidad;
            nuevoCarrito[index] = {
              id: idProductoAgregar,
              nombre: nombre,
              cantidad: cantidad + 1,
            };
          }
        });
        //de otra form agregamos el producto al arreglo
      } else {
        nuevoCarrito.push({
          id: idProductoAgregar,
          nombre: nombre,
          cantidad: 1,
        }
        );
      }
      return{...estado,carrito:nuevoCarrito}
        }
     
    default:
      return estado;
  }
};

export { reducerr };
