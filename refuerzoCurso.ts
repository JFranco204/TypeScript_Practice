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
let resultado1: null = null;

// Undefined — variable declarada pero sin valor asignado
let dato: undefined = undefined;


// Operadores ---------------

// Aritméticos
let suma1 = 10 + 3;    // 13
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



// let nombre2: string = 'jhan';
// let edad2: number = 21;
// let profesion: string = 'Programador';

// console.log('Hola mi nombre es:', nombre2, 'tengo', edad2, 'años', 'y soy', profesion );


// console.log(`Hola mi nombre es: ${nombre2} tengo ${edad2} años y soy ${profesion}` );


// console.log(typeof "hola");   // "string"
// console.log(typeof 42);       // "number"
// console.log(typeof true);     // "boolean"
// console.log(typeof undefined);// "undefined"
// console.log(typeof null);     // "object" ← bug histórico de JS, así es

// let nombre: string = "Jhan";
// let edad: number = 21;
// let disponibilidad: boolean = true;
// const ivaColombia: number =  19;

// console.log(`Me llamo ${nombre}, tengo ${edad} años y mi disponibilidad es ${disponibilidad}`);


// let edad: number = 17;
// let acceso: string = edad >= 18 ? "permitido" : "denegado";
// console.log(acceso);


// let tamañoMiPene: number = 17;

// if (tamañoMiPene >= 20) {
//     console.log('Severo titan');
// } else if (tamañoMiPene >= 17) {
//     console.log('Bien un poco mas grande del promedio, ganador');
// } else {
//     console.log('Micropene');
// }


// let dia1: string = "Lunes";

// if ( dia1 === dia1  ) {
//     throw new Error ('Dia no reconocido');
// }

// switch (dia1) {
//     case "Lunes":
//     case "Martes": 
//     case "Miercoles": 
//     case "Jueves": 
//     case "Viernes":
//         console.log("Dias habiles");
//         break;
//     case "Sabado":
//     case "Domingo":
//         console.log("Fin de semana"); 
//         break;
//     default:
//         console.log("Dia no reconocido")
// }

// let hijos: number = 0;
// let casado: boolean = true;

// if ( hijos >= 1 && casado ) {
//     console.log("Es papa de familia");
// } else if ( hijos >= 1 && !casado ) {
//     console.log("Es luchon");
// } else {
//     console.log("No es fertil");
// }


// let perros: boolean = false;
// let compartido: boolean = true;

// if ( perros || !compartido ) {
//     console.log("Los perros son tuyos");
// } else if ( !perros || compartido ) {
//     console.log("Los perros son compartidos");
// }


// let clasificarNota: string = "9";

// if ( clasificarNota >= "9" ) {
//     console.log("Excelente");
// } else if ( clasificarNota >= "7" ) {
//     console.log("Bueno");
// } else if ( clasificarNota >= "6" ) {
//     console.log("Aprobado");
// } else if ( clasificarNota < "6") {
//     console.log("Reprobado");
// } else {
//     console.log("Nota invalida");
// }


// function clasificarNota ( note: number ) {
//     return String(note);
// }

// console.log("Tu nota es:", clasificarNota(10));


// function clasificarNota(note: number): string {
//   if (note < 0 || note > 10) return "Nota inválida";
//   if (note >= 9)  return "Excelente";
//   if (note >= 7)  return "Bueno";
//   if (note >= 6)  return "Aprobado";
//   return "Reprobado";
// }

// let notaExamen: string = clasificarNota(2);

// console.log(`Tu nota es: ${notaExamen}`);


// function estadoSalud ( estado: string, viviras: boolean ) {

//     if ( estado === "Grave" && !viviras) return "Te vas a morir" ;
//     if ( estado === "Medianamente" && !viviras) {
//         return "Talvez te mueras" ;
//     } else if ( estado === "Medianamente" && viviras ) { 
//         return "Te salvaste por poco";
//      }
//     if ( estado === "Bien" && viviras) return "Te salvaste rata" ;
// }

// let salud = estadoSalud ("Bien", true);
// console.log(`Este es tu estado de salud: ${salud}`);



// function estadoSalud(estado: string, viviras: boolean): string {
//     if (estado === "Grave" && !viviras) return "Te vas a morir";
//     if (estado === "Medianamente" && !viviras) return "Tal vez te mueras";
//     if (estado === "Medianamente" && viviras) return "Te salvaste por poco";
//     if (estado === "Bien" && viviras) return "Te salvaste rata";

//     return "Estado desconocido";
// }

// function estadoSalud(estado: string, viviras: boolean): string {
//     if (estado === "Grave") {
//         return viviras ? "Sobreviviste de milagro" : "Te vas a morir";
//     }

//     if (estado === "Medianamente") {
//         return viviras ? "Te salvaste por poco" : "Tal vez te mueras";
//     }

//     if (estado === "Bien") {
//         return viviras ? "Te salvaste rata" : "Algo salió mal";
//     }

//     return "Estado desconocido";
// }

// estadoSalud("Grave", true);

// let est = estadoSalud("Grave", false);
// console.log(est);

// let intentos: number = 0;

// while (intentos < 3) {
//   console.log(`Intento número ${intentos + 1}`);
//   intentos++;
// }
// → Intento número 1, 2, 3


// for ( let contar: number = 1; contar <= 10; contar++ ) {
//     console.log(`Tu conteo es: ${contar}`);
// }


// let note: number = 0;

// while ( note <= 10 ) {
//     console.log(`Tu nota es de: ${note}`);
//     note++;
// }


// let note1: number = 0;
// do {
//     console.log(`Tu jiji nota es de: ${note1}`);
//     note1++;
// } while ( note1 < 0 )



// for ( let i: number = 0; i < 10; i++ ) {
//     if ( i === 5 ) break;
//     console.log( `Conteo: ${i}` );
// }

// for ( let i: number = 0; i < 10; i++ ) {
//     if ( i === 5 ) continue;
//     console.log( `Conteo: ${i}` );
// }




// const frutas: string[] = ["mango", "papaya", "guanábana"];

// for (let i = 1; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }
// → mango, papaya, guanábana


//Con for: Imprime la tabla de multiplicar del 7, 
//del 1 al 10. Formato: "7 x 1 = 7", "7 x 2 = 14", etc.

// for ( let i: number = 1; i <= 10; i++ ) {
//     console.log( ` 7 X ${i} = `, 7 * i );
// }

// const table: number = 7;

// for ( let i: number = 1; i<= 10; i++ ) {
//     console.log(`${table} X ${i} = ${table * i}`); // FORMA CORRECTA 
// }

// const table2: number = 7;

// for ( let i: number = 1; i<= 10; i++ ) {
//     console.log( table2 + " X " + i + " = " + table2 * i );
// }

// const table3: number = 7;

// for ( let i: number = 1; i<= 10; i++ ) {
//     console.log( `7 X ${i} = `, table3 * i );
// }

//Con while: Pide imaginar que tienes una variable saldo que empieza en 100.
//Cada vuelta del ciclo le restas 15. Imprime el saldo en cada vuelta hasta que sea menor a 15.
//Al final imprime "Saldo insuficiente".

// let saldo: number = 100;

// while ( saldo >= 15 ) {
//     console.log( `Tu saldo es: ${saldo}` );
//     saldo -= 15;
// }

// console.log("Saldo insuficiente");


//Con do while: Crea un contador que empiece en 1 y se duplique cada vuelta
//(contador = contador * 2).
//Imprime cada valor hasta que supere 100.

// let count: number = 1;

// do {
//     console.log( `Tu numero es: ${count}` );
//     count *= 2;
// } while ( count <= 100 )

// Recorderis de funciones
// function sumar( a: number, b: number = 10 ): number {
//     return a + b;
// }

// let resultado: number = sumar(10);
// console.log(resultado);


// console.log(sumar(20,10));





// EJERCICIO - FUNCIONES

//Primera: Escribe una función esPar que reciba un número y retorne true si es par o false si es impar. 
// Pista: un número es par cuando el residuo de dividirlo entre 2 es cero (n % 2 === 0).


function esPar(valor: number): boolean {
  if (valor < 0) return false;
  return valor % 2 === 0;
}

let identificacion = esPar( 3 );
console.log( `Tu numero es ${identificacion}` );


//Segunda: Escribe una función calcularDescuento que reciba el precio original y el porcentaje de descuento,
//  y retorne el precio final después del descuento. 
// Por ejemplo: calcularDescuento(100000, 15) debería retornar 85000.

function calcularDescuento( precio: number, descuento: number ): number {
    return precio - ( precio * ( descuento / 100) );
}

let descuentoCalculado: number = calcularDescuento(1000,10);
console.log( `Tu precio final con descuento es de: ${descuentoCalculado}` );


// Tercera: Escribe una función contarVocales que reciba un string y retorne cuántas vocales tiene.
// Por ejemplo: contarVocales("Bucaramanga") debería retornar 5.
// Pista: puedes recorrer el string con un for igual que un arreglo, usando palabra[i].

function contarVocales(vocal: string): number {
    let contador: number = 0;

    for (let i = 0; i < vocal.length; i++) {
        let letra = vocal[i];

        if ("aeiou".includes(letra)) {
            contador++;
        }
    }

    return contador;
}

export let resultado = contarVocales("Bucaramanga");
console.log(`Tus vocales son: ${resultado}`);




function contarLetras( texto: string, letra: string ): number {

    let contador2 = 0

    for( let i = 0; i < texto.length; i++ ) {
        let recorrido = texto[i]
        if ( letra === recorrido) {
            contador2++;
        }
    }
    return contador2;
}

let resultado2 = contarLetras("joamani", "a");
console.log( `Tu palabra tiene ${resultado2} letras identicas` );






// EJERCICIO - ARREGLOS

//Escribe el código (sin funciones, solo con ciclos y condicionales) que calcule e imprima:

//La temperatura más alta
//La temperatura más baja
//El promedio de todas las temperaturas
//Cuántos días superaron los 22 grados

const temperaturas: number[] = [18, 23, 15, 27, 22, 19, 30, 14, 25, 21];

// Una variable por cada cosa que quieres rastrear
let mayor: number = temperaturas[0];
let menor: number = temperaturas[0];
let suma: number = 0;
let diasCalurosos: number = 0;

for (let i = 0; i < temperaturas.length; i++) {
    
    // ¿Este es mayor que el mayor actual?
    if (temperaturas[i] > mayor) {
        mayor = temperaturas[i];
    }
    
    // ¿Este es menor que el menor actual?
    if (temperaturas[i] < menor) {
        menor = temperaturas[i];
    }
    
    // Acumulamos para el promedio
    suma = suma + temperaturas[i];
    
    // ¿Superó 22?
    if (temperaturas[i] > 22) {
        diasCalurosos++;
    }
}

// El promedio se calcula DESPUÉS del ciclo, no dentro
let promedio: number = suma / temperaturas.length;

console.log(`Temperatura más alta: ${mayor}`);
console.log(`Temperatura más baja: ${menor}`);
console.log(`Promedio: ${promedio}`);
console.log(`Días sobre 22°: ${diasCalurosos}`);





const edades: number[] = [17, 34, 25, 15, 42, 28, 19, 55, 31, 22];

let masAlta: number = edades[0];
let masBaja: number = edades[0];
let conteoPersonas: number = 0;
let sumaEdades: number = 0;

for ( let i = 0; i < edades.length; i++ ) {

    if ( edades[i] > masAlta ){
        masAlta = edades[i];
    }

    if ( edades[i] < masBaja ) {
        masBaja = edades[i];
    }

    if ( edades[i] >= 18 ) {
        conteoPersonas++;
    }

    sumaEdades = sumaEdades + edades[i]
}

let promedio2: number = sumaEdades / edades.length;

console.log(`La edad mas alta es: ${masAlta}`);
console.log(`La edad mas baja es: ${masBaja}`);
console.log(`Personas mayores a 18 años: ${conteoPersonas}`);
console.log(`Promedio de edades: ${promedio2}`);
