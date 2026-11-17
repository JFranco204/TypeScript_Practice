export function max( a: number, b: number, c: number ): number {

    if ( a > b ) {
        return ( a > c ) ? a : c; //A esto se le llama una condicion ternario
    }

    if ( b > c ) {
        return b;
    }

    return ( a > c ) ? a : c;
}

let maxValue: number = max( 3, 10, 5 );

console.log(maxValue);
