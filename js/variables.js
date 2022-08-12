let perifericos = ["monitor", "mouse", "teclado", "auricular"]

function producto(nombre, precio, stock) {
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}

const prod1 = new producto("Monitor 24 pulgadas 60hz", 35000, 15)
const prod2 = new producto("Mouse Razer Viper", 15000, 30)
const prod3 = new producto("Teclado Red Dragon Kumara", 10000, 40)
const prod4 = new producto("Auricular HyperX Cloud Stinger", 8000, 65)