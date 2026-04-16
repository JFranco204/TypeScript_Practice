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