const listado = document.getElementById("listado");
const listadoProductos = "./json/productos.json";

fetch(listadoProductos)
    .then(respuesta => respuesta.json())
    .then(datos => {
        datos.forEach( producto => {
            listado.innerHTML += ` <div class ="card">
            <img src = "${producto.img}" class = "card-img-top  imgProductos" alt = "${producto.nombre}">
            <div>
                <h5> ${producto.nombre} </h5>
                <p> ${producto.precio} </p>
               
            </div>
        </div>
            `
        })
    })
    .catch(error => console.log(error))
    .finally( () => console.log("Proceso finalizado"))
