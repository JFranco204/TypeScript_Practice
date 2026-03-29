
console.log('Inicio del programa');

export let isTired: boolean = false;

if (isTired) {
    console.log('TOMAR CAFE');   
} else {
    console.log('TOMAR AGUA');  
}


let grade:number = 61;

if (grade >= 60) {
    console.log('ERES EL MEJOR, APROBASTE');
} else if (grade > 50) {
    console.log('APROBASTE, PERO DEBES MEJORAR');
}else {
    console.log('NO APROBASTE POR BRUTO')
}


//Otro ejemplo hecho por mi
let fechaNacimiento: number = 1800;

if ( fechaNacimiento >= 2010 ) {
    console.log('Eres parte de la generazion Z');
} else if ( fechaNacimiento > 2000 ) {
    console.log('Estas viejit@')
} else {
    console.log('Eres el anticristo')
}


console.log('Fin del programa');
