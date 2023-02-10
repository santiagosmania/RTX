/*let placavideo = {
    marca: prompt("Escriba NVIDIA o AMD"),
    modelo: prompt("Escriba el modelo de placa de video"),
    cant: prompt("Escriba la cantidad de placas de video que quiere"),
}
*/

class placaVideo {
    constructor(marca, modelo, precio){
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio
    }
}




const modelo1 = new placaVideo ("NVIDIA","RTX 3080", 250000);
const modelo2 = new placaVideo ("AMD","RX 6700", 150000);


const modelo = []
modelo.push(modelo1, modelo2);


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
            agregarPlacaVideo(modelo);
        break;
        case 3:
            catalogo(modelo);
        break;

        default:
            alert("Ingrese la opcion correcta");
        break;
    }


}


function agregarPlacaVideo(array){
    let NModelo = prompt("Ingrese el modelo de la Placa de Video");
    let NMarca = prompt("Ingrese la marca de la Placa de Video");
    let NPrecio= prompt("Ingrese el precio de la Placa de Video");

    const NPlacaVideo = new placaVideo (NModelo, NMarca, NPrecio);
    console.log(NPlacaVideo);
    array.push(NPlacaVideo);
}

function catalogo(){
    console.log("Las placas en stock son:")
    for(let  i = 0; i < modelo.length; i++) {
        alert(modelo[i]);
    }
    
}




menuOpciones();