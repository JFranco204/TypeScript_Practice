export let numbers: number[] = [1, 6, 8, 34, 2, 7, 10, 3, 5];
let maxNumber: number = -9999;

for ( let i: number = 0; i <= numbers.length -1; i++ ) {


    if ( numbers[i] >= maxNumber ) {
        maxNumber = numbers[i];
    }
}

console.log('El numero mayor es:', maxNumber );
