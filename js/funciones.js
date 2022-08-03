function productos() {
    debugger
    let producto = prompt("Eliga uno de los siguientes productos a comprar: (teclado, mouse, monitor, auricular)")
    console.log("Seleccionaste para comprar un", producto)
    let cuota = parseInt(prompt("Eliga la cantidad de cuotas: 1, 3, 6 o 12"))
    console.log("Seleccionaste", cuota, "cuotas")


    console.log("Precio a pagar=", realizarCuota(producto, cuota))
}

function realizarCuota(producto, cuota) {

    switch(producto) {
        case "teclado":
            return prod3.precio / cuota
        case "mouse":
            return prod2.precio / cuota
        case "monitor":
            return prod1.precio / cuota
        case "auricular":
            return prod4.precio / cuota

        default: return "Por favor, seleccione entre las opciones (teclado, mouse, monitor o auricular)"
    } 

    
}

