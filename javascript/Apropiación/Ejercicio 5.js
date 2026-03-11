// Inicio

// Declaración de variables
let month_number;

// Solicitar al usuario que ingrese un número de mes
month_number = parseInt(prompt("Ingrese un número de mes (1-12):"));

// Validar el número de mes ingresado
if (month_number >= 1 && month_number <= 12) {
    // El número de mes es válido
    switch (month_number) {
        case 1:
            alert("El mes número " + month_number + " es Enero");
            break;
        
        case 2:
            alert("El mes número " + month_number + " es Febrero");
            break;
        
        case 3:
            alert("El mes número " + month_number + " es Marzo");
            break;
        
        case 4:
            alert("El mes número " + month_number + " es Abril");
            break;

        case 5:
            alert("El mes número " + month_number + " es Mayo");
            break;

        case 6:
            alert("El mes número " + month_number + " es Junio");
            break;

        case 7:
            alert("El mes número " + month_number + " es Julio");
            break;

        case 8:
            alert("El mes número " + month_number + " es Agosto");
            break;

        case 9:
            alert("El mes número " + month_number + " es Septiembre");
            break;

        case 10:
            alert("El mes número " + month_number + " es Octubre");
            break;

        case 11:
            alert("El mes número " + month_number + " es Noviembre");
            break;

        case 12:
            alert("El mes número " + month_number + " es Diciembre");
            break;
    }
} else {
    // El número de mes no es válido
    alert("Número de mes no válido. Por favor, ingrese un número entre 1 y 12.");
}