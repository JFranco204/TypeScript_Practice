export let limite: number = 10;

for (let i = 0; i <= limite; i ++) {

    if ( i === 5) {
        continue; // Salta el número 5
    }

    console.log('let i:', i);

    if (i === 5) {
        break; // Termina el bucle cuando i es 5
    }
}

    console.log('Fin del programa');