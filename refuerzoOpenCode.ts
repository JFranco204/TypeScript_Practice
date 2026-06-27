// Ejercicios con OpenCode

let weight: number = 120;
let height: number = 1.80;

const imc: number = weight / ( height * height );

if ( imc < 18.5 ) {
    console.log(`Bajo peso - Tu IMC es de: ${imc}`);
}else if ( imc >= 18.5 && imc <= 24.9 ){
    console.log(`Peso normal - Tu IMC es de: ${imc}`);
}else if ( imc >= 25) {
    console.log(`Sobrepeso - Tu IMC es de: ${imc}`);
}
