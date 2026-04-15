// Variables -----------

var nombre1 = "viejo"; // Evítalo, es de la era antigua de JS
let edad1 = 25;        // Puede cambiar su valor
const PI = 3.14;      // No puede cambiar su valor nunca

// Tipos de datos ------------

// String — texto, siempre entre comillas
let nombre2: string = "Jhan";

// Number — cualquier número, entero o decimal
let edad2: number = 23;
let precio: number = 19.99;

// Boolean — solo true o false
let activo: boolean = true;
let logueado: boolean = false;

// Null — ausencia intencional de valor
let resultado: null = null;

// Undefined — variable declarada pero sin valor asignado
let dato: undefined = undefined;


// Operadores ---------------

// Aritméticos
let suma = 10 + 3;    // 13
let resta = 10 - 3;   // 7
let multi = 10 * 3;   // 30
let div = 10 / 3;     // 3.333...
let modulo = 10 % 3;  // 1  ← el residuo de la división, muy útil en entrevistas

// De comparación — siempre retornan true o false
//10 == "10"   // true  ← compara solo valor (evítalo)
//10 === "10"  // false ← compara valor Y tipo (usa siempre este)
//10 !== 5     // true
10 > 5       // true
10 <= 10     // true

// Lógicos
true && false  // false — AND: ambos deben ser true
true || false  // true  — OR: al menos uno debe ser true
!true          // false — NOT: invierte el booleano


// CONDICIONALES ----

let hora: number = 14;

if (hora < 12) {
  console.log("Buenos días");
} else if (hora < 18) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}
// → "Buenas tardes"

//Operador ternario

// Estructura: condición ? valorSiTrue : valorSiFalse
let edad: number = 20;
let acceso: string = edad >= 18 ? "permitido" : "denegado";
console.log(acceso); // "permitido"


// SWITCH --------

let dia: string = "lunes";

switch (dia) {
  case "lunes":
  case "martes":
  case "miércoles":
  case "jueves":
  case "viernes":
    console.log("Día laboral");
    break;
  case "sábado":
  case "domingo":
    console.log("Fin de semana");
    break;
  default:
    console.log("Día no reconocido");
}


// CICLOS -------------

// for 

// for (inicio; condición; actualización)
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// → 0, 1, 2, 3, 4



// while -> Úsalo cuando no sabes cuántas veces se va a repetir — solo sabes la condición de parada:

let intentos: number = 0;

while (intentos < 3) {
  console.log(`Intento número ${intentos + 1}`);
  intentos++;
}
// → Intento número 1, 2, 3



// do while -> Igual que while pero garantiza que el bloque se ejecuta al menos una vez


let numero: number = 10;

do {
  console.log(`El número es ${numero}`);
  numero++;
} while (numero < 5);

// → "El número es 10"
// Se ejecutó una vez aunque 10 < 5 era false desde el inicio