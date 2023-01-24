

let ingreseNombre = prompt("Ingrese Nombre y Apellido");

let respuesta = prompt("Ingrese Si para seguir en el con la compra o No para salir");

while(respuesta !== "Si" && respuesta !== "No"){
    console.log("No ha seleccionado la opccion correcta");
    Exit ;
}

if (respuesta == "Si"){
    console.log("A seleccionado de manera correcta");
} else if (respuesta == "No"){
    console.log("Gracias por visitarnos");

}



let ingreseContraseña = parseInt(prompt("Ingrese Cualquier Contraseña"));

let marca = prompt("Ingrese la marca de la placa de video");
let modelo = prompt("Ingrese el modelo de la placa de Video");


let precio;


if (marca === "NVIDIA") {
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

} else if (marca === "AMD") {
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




let cant = parseInt(prompt("Escriba la cantiadad de productos que quiere"));


let preciofinal = cant * precio


alert(precifinal);

