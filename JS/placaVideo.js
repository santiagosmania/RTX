


const resultado = document.getElementById("resultado");

const formulario = document.getElementById("formulario");

const filtrar = () =>{

    resultado.innerHTML = '';
    
    const texto = formulario.value.toLowerCase();
    for ( let producto of productos ){
        let nombre = producto.nombre.toLowerCase();

        if ( nombre.indexOf(texto) !== -1){
            resultado.innerHTML += `
            <div class="card" style="width: 18rem;" id="resultado">
                <img src=${producto.imagen} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Nombre: ${producto.nombre}</h5>
                    <h5 class="card-title">Destino: ${producto.destino}</h5>
                    <p class="card-text">Valor: ${producto.valor}</p>
                    <button class="btn btn-primary">Agregar al carrito</button>
                </div>
            </div>
            `
        }

    }
    if ( resultado.innerHTML === '' ){
        resultado.innerHTML = `<li>Producto no encontrado</li>`
    }

}

formulario.addEventListener('keyup', filtrar)
filtrar();

let ingreseNombre = prompt("Ingrese Nombre y Apellido");

let respuesta = prompt("Ingrese Si para seguir en el con la compra o No para salir");

while (respuesta.toLowerCase() == "si"  && respuesta.toLowerCase() == "no") {
    console.log("No ha seleccionado la opccion correcta");
    Exit;
}

if (respuesta.toLowerCase() == "si") {
    console.log("A seleccionado de manera correcta");
} else if (respuesta.toLowerCase() == "no") {
    console.log("Gracias por visitarnos");
    Exit;

}



let ingreseContraseña = parseInt(prompt("Ingrese una Contraseña"));

let marca = prompt("Ingrese la marca de la placa de video");
let modelo = prompt("Ingrese el modelo de la placa de Video");


let precio;


if (marca.toUpperCase() === "NVIDIA") {
    switch (modelo) {
        case "RTX 3060":
            precio = 200000;
            console.log("Ha seleccionado la placa de viedeo 3060");
            break;

        case "RTX 3070":
            precio = 270000;
            console.log("Ha seleccionado la placa de viedeo 3070");
            break;
        case "RTX 3080":
            precio = 300000;
            console.log("Ha seleccionado la placa de viedeo 3080");
            break;
        case "RTX 3090":
            precio = 400000;
            console.log("Ha seleccionado la placa de viedeo 3090");
            break;
    }

} else if (marca.toUpperCase() === "AMD") {
    switch (modelo) {
        case "RX 6500":
            precio = 195000;
            console.log("Ha seleccionado la placa de viedeo 6500");
            break;

        case "RX 6600":
            precio = 215000;
            console.log("Ha seleccionado la placa de viedeo 6600");
            break;
        case "RTX 6700":
            precio = 250000;
            console.log("Ha seleccionado la placa de viedeo 6700");
            break;
        case "RX 6800":
            precio = 300000;
            console.log("Ha seleccionado la placa de viedeo 6800");
            break;

    }

}










let cant = parseInt(prompt("Escriba la cantidad de productos que quiere"));


let preciofinal = cant * precio

class placaVideo {
    constructor(marca, modelo, precio){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio
    }
}




const modelo1 = new placaVideo ("NVIDIA","RTX 3080", 250000);
const modelo2 = new placaVideo ("AMD","RX 6700", 150000);


const tipo = []
tipo.push(modelo1, modelo2);


console.log(modelo1);

function menuOpciones(salir){
    let ingreseOpcion = parseInt(prompt(`Ingrese la opción deseada
    1 - Salir del menu
    2- Agregar Placa de Video
    3 - Consultar toda la info de todas las placas de video`));

    switch(ingreseOpcion){
        case 1:
            alert("Gracias por venir")
            salir = true
            return salir
        case 2:
            agregarPlacaVideo(tipo);
        break;
        case 3:
            catalogo(tipo);
        break;

        default:
            alert("Ingrese la opcion correcta");
        break;
    }


}



alert(preciofinal);
menuOpciones();



function agregarPlacaVideo(array){
    let NModelo = prompt("Ingrese el modelo de la Placa de Video");
    let NMarca = prompt("Ingrese la marca de la Placa de Video");
    let NPrecio= prompt("Ingrese el precio de la Placa de Video");

    const NPlacaVideo = new placaVideo (NModelo, NMarca, NPrecio);
    console.log(NPlacaVideo);
    array.push(NPlacaVideo);
}


function catalogo(array){
    console.log("Las zapatillas disponibles son:")
    for(let elemento of array){
        console.log(elemento.marca, elemento.modelo, elemento.precio)
    }
}