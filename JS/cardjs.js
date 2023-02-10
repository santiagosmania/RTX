class Producto {
    constructor(nombre, precio, url) {
        this.nombre = nombre;
        this.precio = precio;
        this.url = url;
    }
}

const rtx3070 = new Producto("RTX 3070", 250000, "./images/rtx3070.png");
const rtx3080 = new Producto("RTX 3080", 3000000, "./images/rtx3080.webp");
const rtx3090 = new Producto("RTX 3090", 350000, "./images/rtx3090.jpg");

const arrayProductos = [rtx3070, rtx3080, rtx3090];

const contenedorProductos = document.getElementById("contenedorProductos");


arrayProductos.forEach(producto => {
    const div = document.createElement("div");
    div.className = "col-xl-4";
    div.innerHTML = `<div class="card" style="width: 18rem;">
                        <img src="${producto.url}" class="card-img-top" alt="${producto.nombre}">
                        <div class="card-body">
                            <h5 class="card-title"> Nombre: ${producto.nombre} </h5>
                            <p class="card-text"> Precio: ${producto.precio} </p>
                            <button class="btn btn-primary">Agregar al carrito</button>
                        </div>
                    </div>`
    
    contenedorProductos.appendChild(div);
})


