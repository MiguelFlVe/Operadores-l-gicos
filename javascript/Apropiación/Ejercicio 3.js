// 1. Pedimos la temperatura al usuario
let temperatura = prompt("¿A cuántos grados está la ciudad?");

// 2. Convertimos la respuesta a número para asegurar una comparación correcta
temperatura = Number(temperatura);

// 3. Estructura condicional simple
if (temperatura >= 30) {
  alert("Hace calor");
} else {
  alert("Clima agradable");
}