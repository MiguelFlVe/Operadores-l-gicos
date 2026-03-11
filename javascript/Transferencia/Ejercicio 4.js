// Inicio

// Declaración de variables
let input, action;

// Solicitar al usuario que ingrese un número
input = parseInt(prompt("¿Qué acción desea realizar? \n 1. Consultar saldo \n 2. Retirar dinero \n 3. Depositar dinero \n 4. Salir"));

// Validar la opción ingresada por el usuario
if (input >= 1 && input <= 4) {
    switch (input) {
        case 1:
            alert("Has seleccionado: Consultar saldo \n Tu saldo actual es: $XXXXXX.XX");
            break;

        case 2:
            action = parseFloat(prompt("Has seleccionado: Retirar dinero \n Ingrese la cantidad a retirar:"));
            alert("Has retirado: $" + action + "\n Tu nuevo saldo es: $XXXXXX.XX");
            break;

        case 3:
            action = parseFloat(prompt("Has seleccionado: Depositar dinero \n Ingrese la cantidad a depositar:"));
            alert("Has depositado: $" + action + "\n Tu nuevo saldo es: $XXXXXX.XX");
            break;

        case 4:
            alert("Has seleccionado: Salir");
            break;
    }
} else {
    alert("Opción no válida. Por favor, ingrese un número entre 1 y 4.");
}