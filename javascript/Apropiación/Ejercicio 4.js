// 1. Solicitamos la velocidad al usuario
let velocidad = Number(prompt("Ingresa la velocidad del vehículo (km/h):"));

// 2. Evaluamos los rangos con condicionales múltiples
if (velocidad < 30) {
  alert("Muy lento");
}
else if (velocidad >= 30 && velocidad <= 60) {
  alert("Velocidad moderada");
}
else if (velocidad >= 61 && velocidad <= 100) {
  alert("Rápido");
}
else if (velocidad > 100) {
  alert("Muy rápido");
}
else {
  alert("Entrada no válida. Por favor, ingresa un número.");
}