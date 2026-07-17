export function addTwoNumbers12 ( num1: number, num2: number ): number {
    return num1 + num2
}


export function substractTwoNumbers12 ( num1: number, num2: number ): number {
    return num1 - num2
}

export function timesTwoNumbers12 ( num1: number, num2: number ): number {
    return num1 * num2
}

export function divideTwoNumbers12 ( num1: number, num2: number ): number {
    return num1 / num2
}


export function printMultiplication ( base: number, limite: number = 10 ) {
    for ( let i: number = 0; i <= limite; i++ ) {
      console.log(`${base} x ${i} = ${(base * i)}`);  
    }
}