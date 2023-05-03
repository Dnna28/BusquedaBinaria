let min = 1;
let max = 100;
let intentos = 0;

function adivinar() {
  let medio = Math.floor((min + max) / 2);
  intentos++;

  let confirmacion = confirm("¿Es " + medio + " tu número?");

  if (confirmacion) {
    document.getElementById("numero").innerHTML = "Tu número es " + medio + ", excelente decisión. ¡Adiviné en " + intentos + " intentos!";
  } else {
    let respuesta = prompt("¿Es tu número mayor o menor que " + medio + "?\nEscribe 'mayor' o 'menor'.");

    if (respuesta.toLowerCase() === "mayor") {
      min = medio + 1;
    } else if (respuesta.toLowerCase() === "menor") {
      max = medio - 1;
    } else {
      alert("Respuesta inválida. Inténtalo de nuevo.");
      adivinar();
      return;
    }

    adivinar();
  }
}

// Event listener para el botón "Sí"
document.getElementById("si").addEventListener("click", function() {
  alert("¡Genial, acerté! Gracias por jugar.");
});

// Event listener para el botón "No"
document.getElementById("no").addEventListener("click", function() {
  adivinar();
});

// Event listener para el botón "Volver a jugar"
document.getElementById("volver").addEventListener("click", function() {
  min = 1;
  max = 100;
  intentos = 0;
  adivinar();
});

