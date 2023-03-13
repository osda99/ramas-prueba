// Generar un número aleatorio del 1 al 100
var numAleatorio = Math.floor(Math.random() * 100) + 1;

// Pedir al usuario que adivine el número
var intentos = 0;
var numUsuario = prompt("Adivina un número del 1 al 100");

// Mientras el usuario no adivine el número
while (numUsuario != numAleatorio) {
  // Incrementar el número de intentos
    intentos++;

    // Comprobar si el número es demasiado alto o demasiado bajo
    if (numUsuario < numAleatorio) {
        numUsuario = prompt("Demasiado bajo. Adivina de nuevo:");
    } else if (numUsuario > numAleatorio) {
        numUsuario = prompt("Demasiado alto. Adivina de nuevo:");
    }
    }

// Si el usuario adivina correctamente, mostrar un mensaje de felicitación
alert("¡Felicidades! Adivinaste el número en " + intentos + " intentos.");
