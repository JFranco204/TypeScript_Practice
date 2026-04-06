
export function multiplicationTable ( base: number, limit: number = 10 ) {

    if ( limit <= 0 )
        throw new Error('Debes asingar valores positivos')

    for (let i = 1; i <= limit; i++ ) {
        console.log(base, ' X ', i, ' = ', base * i);
    }

}