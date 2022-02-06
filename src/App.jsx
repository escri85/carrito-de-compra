import "./App.scss";
import { Contenedor, Menu } from "./styles/components/index";
import { NavLink, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Blog from "./pages/Blog";
import Tienda from "./pages/Tienda";
import NotFound from "./pages/NotFound";
import Carrito from "./pages/Carrito";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducerr } from "./redux/reducers/tiendaReducer";
const App = () => {
  /*   const productos = [
    { id: 1, nombre: "producto 1" },
    { id: 2, nombre: "producto 2" },
    { id: 3, nombre: "producto 3" },
    { id: 4, nombre: "producto 4" },
  ]; */
  // const inicioCarrito = { id: "", cantidad: "", nombre: "" };
  const store = createStore(reducerr);
  
  // const agregarProductoAlCarrito = (idProductoAgregar, nombre) => {
  //   // Si el carrito no tiene elementos entonces agregamos uno.
  //   if (carrito.length === 0) {
  //     setCarrito([{ id: idProductoAgregar, productos: nombre, cantidad: 1 }]);
  //   } else {
  //     //de otra forma tenemos q revisar que el carrito no tenga ya el porducto
  //     //si ya lo tiene entonces queremos que actualie su valor
  //     //si no tiene el producto entonces lo agregamos

  //     //para poe¡der editar el arreglo tenemos que clonarlo
  //     const nuevoCarrito = [...carrito];
  //     //comprobamos si el carrito tiene el id de el producto a agregar
  //     const yaEstaEnCariito =
  //       nuevoCarrito.filter((productoDeCarrito) => {
  //         return productoDeCarrito.id === idProductoAgregar;
  //       }).length > 0;

  //     // Si ya tiene el producto entonces lo tenemos que actualizar.
  //     if (yaEstaEnCariito) {
  //       //para ello tenemos que buscarlo,obtener su posicion en el arreglo
  //       //y en base a su posicio ya actualizamos el valor
  //       nuevoCarrito.forEach((productoDeCarrito, index) => {
  //         if (productoDeCarrito.id === idProductoAgregar) {
  //           const cantidad = nuevoCarrito[index].cantidad;
  //           nuevoCarrito[index] = {
  //             id: idProductoAgregar,
  //             nombre: nombre,
  //             cantidad: cantidad + 1,
  //           };
  //         }
  //       });
  //       //de otra form agregamos el producto al arreglo
  //     } else {
  //       nuevoCarrito.push({
  //         id: idProductoAgregar,
  //         nombre: nombre,
  //         cantidad: 1,
  //       });
  //     }
  //     setCarrito(nuevoCarrito);
  //   }
  // };
  console.log(
    "console,log de de config reducer en la variable store",
    store.getState()
  );

  return (
    <Provider store={store}>
      <Contenedor>
        <Menu>
          <NavLink to="/">inicio</NavLink>
          <NavLink to="/blog">blog</NavLink>
          <NavLink to="/tienda">tienda</NavLink>
        </Menu>
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/tienda" element={<Tienda />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <aside>
          <Carrito /* carrito={carrito} */ /*  setCarrito={setCarrito} */ />
        </aside>
      </Contenedor>
    </Provider>
  );
};

export default App;
