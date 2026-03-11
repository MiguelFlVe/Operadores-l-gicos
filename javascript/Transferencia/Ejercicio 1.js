// Acceso a un sistema

let usuario = prompt("Ingrese su usuario:");
let contraseña = prompt("Ingrese su contraseña:");

if (usuario === "admin" && contraseña === "1234") {
    alert("Acceso PERMITIDO");
} else {
    alert("Acceso DENEGADO");
}

//Se modifica como lo recomendado, entrada por usuario. 