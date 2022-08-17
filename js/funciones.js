console.dir(document.body)
const productos=[{id: 1, nombre:"Mouse Logitech Pro Series Pro X Superlight", precio:19.399},
{id: 2, nombre:"Mouse Razer Viper Mini", precio:7.199},
{id: 3, nombre:"Teclado bluetooth Logitech Master Series MX Keys QWERTY", precio:25.999}];
 console.log(productos)

function calcularIva(precio){
    let precioConIva=precio * 1.21;
    return precioConIva;
}

let conIva=calcularIva(100);
console.log("El valor del iva es $"+conIva);

function aplicarDescuento(precio){
    return precio * 0.9;
}
let precioConAumento=aplicarDescuento(calcularIva(parseInt(prompt("Ingrese los valores de lo que quiere comprar"))))
console.log(precioConAumento);


let cartas = document.getElementById("cartas");
for(const producto of productos){
    let carta = document.createElement("div");
    carta.className="card col-md-6";
    carta.innerHTML=`
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text">${producto.precio}</p>
      <button class="btn btn-primary">COMPRAR</button>
    </div>
    `
    ;
    cartas.append(carta);
}