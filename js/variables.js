const productos = [
  {
    id: crearId(),
    nombre: "KIT MOUSE Y TECLADO MARS GAMING RGB",
    precio: 5999,
  },
  {
    id: crearId(),
    nombre: "Notebook Dell Vostro 3400 I5 8gb 14 Pulgadas",
    precio: 207240,
  },
  {
    id: crearId(),
    nombre: "Monitor Gamer 25 Pulgadas Ozone 144hz",
    precio: 76608,
  },
  {
    id: crearId(),
    nombre: "MOUSE GAMER THE AUTHENTIC R.A.T 4+ mr03mcambl00 NEGRO",
    precio: 10300,
  },
  {
    id: crearId(),
    nombre: "COMPUTADORA GAMER MASTER",
    precio: 399000,
  },
  {
    id: crearId(),
    nombre: "Joystick Inalámbrico Ps4 Level Up Goliath Negro Y Rojo",
    precio: 6276,
  },
  {
    id: crearId(),
    nombre: "SILLA GAMER ERGOPREMIUM DR-50BR negro rojo",
    precio: 58800,
  },
  {
    id: crearId(),
    nombre: "AURICULAR GAMER HP CON MICRÓFONO- LED DHE-8003",
    precio: 13860,
  },
];

const articlePd = document.querySelector("#articuloPd");
const listarBtn = document.querySelector(".listarBtn");
const buscarBtn = document.querySelector(".buscarBtn");
const agregarBtn = document.querySelector(".agregarBtn");

const carrito = [];
