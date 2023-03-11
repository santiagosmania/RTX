
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
const RTX3090 = new Producto(3, "RTX 3090", 350000, "./images/rtx3090.jpg");
const I3 = new Producto(4, "Intel Core I3 12100F", 49000, "./images/i3.jpg");
const I5 = new Producto(5, "Intel Core I5 12400F", 83000, "./images/i5.webp");
const I7 = new Producto(6, "Intel I7 11700F", 120000, "./images/i7.jpg");
const R3 = new Producto(7, "Ryzen 3 4100", 35000, "./images/R3.webp");
const R5 = new Producto(8, "Ryzen 5 5600", 76000, "./images/R5.png");
const R7 = new Producto(9, "Ryzen 7 5700X", 145000 , "./images/R7.webp");

const productos = [RTX3070, RTX3080, RTX3090, I3, I5, I7, R3, R5, R7];

console.log(productos);




let carrito = [];




if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

const urlLocal = "productos.json";

fetch(urlLocal)
    .then(response => response.json())
    .then(data => {
        productos = (data);
    })
    .catch(error => console.log(error));

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
                        </div>`

                       
                        


        contenedorProductos.appendChild(card);

        
        
        const boton = document.getElementById(`boton${producto.id}`);
        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id);

        
            
        })

        boton.addEventListener("click", () => {
            Toastify( {
                text: "Producto agregado al carrito",
                duration: 3000, 
                gravity: "top",
                position: "right", 
                destination: "",
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast();

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
                                <button class = "btn colorBoton" id="aumentar${producto.id}" > + </button>
                                <button class = "btn colorBoton" id="disminuir${producto.id}" > - </button>

                            </div>
                        </div>
                        `
        contenedorCarrito.appendChild(card);

     
        const boton = document.getElementById(`eliminar${producto.id}`);
        const botonaum = document.getElementById(`aumentar${producto.id}`);
        const botondis = document.getElementById(`disminuir${producto.id}`) 
        boton.addEventListener("click", () => {
            eliminarDelCarrito(producto.id);
        })
          botonaum.addEventListener("click", () => {
            aumentarCantidad(producto.id);
         })
        

   
        botondis.addEventListener("click", () => {
             disminuirCantidad(producto.id);
         }) 
    })
   
    calcularTotal();

}

 








const aumentarCantidad = (id) => {
    const producto = carrito.find((producto) => producto.id === id);
    producto.cantidad++;
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito()
}

const disminuirCantidad = (id) => {
    const producto = carrito.find((producto) => producto.id === id);
    producto.cantidad--;
    if(producto.cantidad === 0){
        eliminarDelCarrito(id);
    }else{
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    mostrarCarrito()

  
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



const finalizarCompra = document.getElementById("finalizarCompra");

finalizarCompra.addEventListener("click", () => {
  
    
    Swal.fire( {
        title: "¿Estas seguro de eliminar los fideos?", 
        icon: "warning", 
        confirmButtonText: "Aceptar", 
        showCancelButton: true, 
        cancelButtonText: "Cancelar"
    }).then((result) => {
        if(result.isConfirmed) {
            carrito = carrito.filter(producto => producto !== "fideos");
            console.log(carrito);
            Swal.fire({
                title:"Producto Eliminado!",
                icon: "success",
                confirmButtonText: "Aceptar"
            })
        }
    })



    eliminarTodoElCarrito()
  
  



})
   
    

