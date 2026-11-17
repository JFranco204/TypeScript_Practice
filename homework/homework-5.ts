export let numbers: number[] = [1, 6, 8, 4, 2, 7, 10, 3, 5];

for ( let i: number = 0; i <= numbers.length -1; i++ ) {

    let parImpar: number = numbers[i];

    if ( (parImpar % 2) === 0 ) {
        console.log(`${parImpar} es un numero par`);
    } else if ( (parImpar % 2) === 1 ) {
        console.log(`${parImpar} es un numero impar`);
    }
}
