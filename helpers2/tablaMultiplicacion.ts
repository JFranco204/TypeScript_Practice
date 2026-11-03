export function multipliFor ( base1:number, limite1:number ) {

    for( let i = 1; i <= limite1; i++ ) {

        if ( base1 <= 0 || limite1 <=0 ) {
        console.log(`PAILAAAS`);
        break;
    }

        console.log(base1 + ' X ' + i + ' = ' + (base1 * i));
    }
}

export function multipliWhile ( num1:number, num2:number ) {

    if ( num1 <= 0 || num2 <= 0 ) {
        throw new Error(`NO PAPÁ, PAILAS`);
    }

    let i:number = 1;

    while ( i <= num2 ) {
        console.log(num1 + ' X ' + i + ' = ' + (num1 * i));
        i++;
    }
}