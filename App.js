import { productos } from "./stock.js";

const mostrarProductos = (productos) => {

  const contenedorProductos = document.getElementById("producto-contenedor");
  productos.forEach(producto => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML += `<div class="card-image">
                        <img src=${producto.img}>
                        <span class="card-title">Nombre: ${producto.nombre}</span>
                        <a class="btn-floating halfway-fab wabes-effect waves-light red" id=boton${producto.id}><i class="material-icons">add_shopping_cart</i></a>
                      </div>
                      <div class="card-content">
                          <p>Descripcion: ${producto.desc}</p>
                          <p>Precio: ${producto.precio}</p>
                      </div>
                      `
    contenedorProductos.appendChild(div);
  });
};

mostrarProductos(productos);