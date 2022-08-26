function crearId() {
  return parseInt(Math.random() * 100000);
}

function listarProductos() {
  productos.forEach(producto => {
    articlePd.className = "bordeAzul";
    articlePd.innerHTML += `<img src="https://via.placeholder.com/150" alt="">
                <h3>${producto.nombre}</h3>
                <span>$${producto.precio}</span>
                <span>Id:${producto.id}</span>
                <button class="agregarBtn">Agregar Al carrito</button>`;
  });
}

function buscarPd() {
  let prod = prompt("Ingrese el productos que desea buscar:");
  const resultado = productos.filter(producto =>
    producto.nombre.includes(prod)
  );
  console.table(resultado);
}

function agregarPd() {
  
}
