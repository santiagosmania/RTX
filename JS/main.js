//let nombreAlumno = prompt("Ingrese su nombre:"); -- string solo con el prompt
//console.log(nombreAlumno);

//let notaPrimerParcial = parseInt(prompt("Ingrese la nota del primer parcial")) -- parse Int numero

//console.log(notaPrimerParcial); -- muestra

let ingreseAltura = parseInt(prompt("Ingrese su altura"));
let ingresePeso = parseInt(prompt("Ingrese su peso"));

let Altura = ingreseAltura / 100

let indiceMasa = (ingresePeso / (Altura^2));

console.log("El indice de masa corporal es:" + indiceMasa);

let ingreseNombre = prompt("Ingrese Nombre y Apellido");
let ingreseContraseña = parseInt(prompt("Ingrese Cualquier Contraseña"));