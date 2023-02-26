
class Producto {
    constructor(id, nombre, precio, img){
        this.id = id;
        this.nombre = nombre; 
        this.precio = precio;
        this.img = img; 
        this.cantidad = 1;
    }
}

const RTX3070 = new Producto(1, "RTX 3070", 250000, "./images/rtx3070.png");
const RTX3080 = new Producto(2, "RTX 3080", 300000, "./images/rtx3080.webp");
const RTX3090 = new Producto(3, "RTX 3090", 400000, "./images/rtx3090.jpg");

const productos = [RTX3070, RTX3080, RTX3090];

console.log(productos);




let carrito = [];



if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
}


const contenedorProductos = document.getElementById("contenedorProductos");




const mostrarProductos = () => {
    productos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-sm-12");
        card.innerHTML = `
                        <div class ="card">
                            <img src = "${producto.img}" class = "card-img-top imgProductos" alt = "${producto.nombre}">
                            <div>
                                <h5> ${producto.nombre} </h5>
                                <p> ${producto.precio} </p>
                                <button class = "btn colorBoton" id="boton${producto.id}" > Agregar al Carrito </button>
                            </div>
                        </div>
                        `
        contenedorProductos.appendChild(card);

    
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);
        })
    })
}

mostrarProductos();



const agregarAlCarrito = (id) => {
    const productoEnCarrito = carrito.find(producto => producto.id === id);
    if(productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else {
        const producto = productos.find(producto => producto.id === id);
        carrito.push(producto);
    }
    calcularTotal();
  
    localStorage.setItem("carrito", JSON.stringify(carrito));
}


const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
    mostrarCarrito();
})

const mostrarCarrito = () => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6", "col-sm-12");
        card.innerHTML = `
                        <div class ="card">
                            <img src = "${producto.img}" class = "card-img-top imgProductos" alt = "${producto.nombre}">
                            <div>
                                <h5> ${producto.nombre} </h5>
                                <p> ${producto.precio} </p>
                                <p> ${producto.cantidad} </p>
                                <button class = "btn colorBoton" id="eliminar${producto.id}" > Eliminar </button>
                            </div>
                        </div>
                        `
        contenedorCarrito.appendChild(card);

     
        const boton = document.getElementById(`eliminar${producto.id}`);
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        })
    })
    calcularTotal();
}



const eliminarDelCarrito = (id) => {
    const producto = carrito.find(producto => producto.id === id);
    const indice = carrito.indexOf(producto);
    carrito.splice(indice, 1);
    mostrarCarrito();


    localStorage.setItem("carrito", JSON.stringify(carrito));
}



const total = document.getElementById("total");

const calcularTotal = () => {
    let totalCompra = 0; 
    carrito.forEach(producto => {
        totalCompra += producto.precio * producto.cantidad;
       
    })
    total.innerHTML = `Total: $${totalCompra}`;
}



const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    eliminarTodoElCarrito();
})

const eliminarTodoElCarrito = () => {
    carrito = []; 
    mostrarCarrito();


    localStorage.clear();
}