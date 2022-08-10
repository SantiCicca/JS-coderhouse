const paises = ["Argentina", "Uruguay", "Chile", "Peru"]

function listarPaises() {
    for (let i = 0; i < paises.length; i++) {
        console.log(paises[i])
    }
}

function agregarPais() {
    let nuevoPais = prompt("Ingresa el nuevo pais:")
        paises.push(nuevoPais)
}

