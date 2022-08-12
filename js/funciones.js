// Simulador Interactivo

function productos() { 

    let producto = prompt("Eliga uno de los siguientes productos a comprar: (teclado, mouse, monitor, auricular)")
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

// Funciones de Array "Perifericos"

function listarPerifericos() {
    for (let i = 0; i < perifericos.length; i++) {
        console.log(perifericos[i])
    }
}

function agregarPeriferico() {
    let nuevoPeriferico = prompt("Ingresa el nuevo Periferico a agregar:")
    let resultado = perifericos.includes(nuevoPeriferico)
    if (resultado === false) {
        perifericos.push(nuevoPeriferico)
    } else {
        console.error("El periferico", nuevoPeriferico, "ya esta incluido en la lista")
    }
        
}

function quitarPeriferico() {
    let aQuitar = prompt("Eliga el nombre del periferico a quitar:")
    let indice = perifericos.indexOf(aQuitar)
    if (indice !== -1) {
        let resultado = perifericos.splice(indice, 1)
        console.warn("Se ha eliminado", resultado, "de la lista de perifericos")
    } else {
        console.error("No se ha encontrado el periferico", aQuitar)
    }
}



