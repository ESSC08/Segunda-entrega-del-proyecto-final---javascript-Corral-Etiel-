const productos = [
    { id: '0', tipo: "consumible", modelo: "Pocion", precio: 100, img: "./imagenes/pocion.png" },
    { id: '1', tipo: "consumible", modelo: "Super pocion", precio: 200, img: "./imagenes/superpocion.png" },
    { id: '2', tipo: "pokeball", modelo: "Pokeball", precio: 300, img: "./imagenes/pokeball.png" },
    { id: '3', tipo: "pokeball", modelo: "Superball", precio: 400, img: "./imagenes/superball.webp" },
    { id: '4', tipo: "pokeball", modelo: "Ultraball", precio: 500, img: "./imagenes/ultraball.webp" },
    { id: '5', tipo: "piedraEvolutiva", modelo: "Piedra Luna", precio: 1500, img: "./imagenes/piedra luna.png" },
];

const contenedorTienda = document.getElementById('contenedorTienda');
const contenedorCarrito = document.getElementById('contenedorCarrito');
const carrito = []
for (const producto of productos) {

//-------------HTML---------------------//

const divProducto = document.createElement('div');
const imgProducto = document.createElement('img');
const nombreProducto = document.createElement('h2');
const precioProducto = document.createElement('h3');
const botonComprar = document.createElement('button');

//---------------Estilos CSS---------------------//

divProducto.className = 'product-container';
imgProducto.className = 'product-container img';
nombreProducto.className = 'nombre-producto';
precioProducto.className = 'card-precio';
botonComprar.className = 'button-add';

//-----------------Elementos & ID-------------------//

divProducto.id = producto.id;
imgProducto.src = producto.img;
nombreProducto.append(producto.modelo);
precioProducto.append(`$${producto.precio}`);
botonComprar.append('Comprar');
botonComprar.id = `${producto.id}`;

botonComprar.onclick = () => {
const productoComprado = productos.find(producto => producto.id === botonComprar.id);
carrito.push({ nombre: productoComprado.modelo, precio: productoComprado.precio })
}

//---------------Agrego elementos al divProducto--------------------//
divProducto.append(imgProducto, nombreProducto, precioProducto, botonComprar);

//----------------Agregamos divProducto al cada contenedor---------//
contenedorTienda.append(divProducto);
}

const mostrarCarrito = () => {

for (const producto of carrito) {
const nombreProducto = `<h4>Producto : ${producto.nombre}</h4>`
const precioProducto = `<h4>Precio : ${producto.precio}</h4>`
contenedorCarrito.innerHTML += nombreProducto
contenedorCarrito.innerHTML += precioProducto
}

const total = carrito.reduce((accumulador, producto) => accumulador + producto.precio, 0);
contenedorCarrito.append(`Total Compra :  ${total}`)
}

let botonCarrito = document.getElementById("button-checkout")
botonCarrito.onclick = mostrarCarrito;

const btnbuscar = document.getElementById("btnBuscar");

const buscarProducto = ()=>{
const productoTipo = inputBuscador.value;

const resultadoBusqueda = productos.filter(producto => producto.tipo === productoTipo )
for(producto of productos){

const id = producto.id;
document.getElementById(id).style.display = "none";

}
for(producto of resultadoBusqueda){
    const id = producto.id;
    document.getElementById(id).style.display = "flex";
}
}