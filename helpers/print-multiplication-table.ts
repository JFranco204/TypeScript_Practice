

export function printMultiplicationTable (base: number, limit: number = 10) {

    if (limit <= 10) {
        throw new Error('El limite debe ser mayor a 10');
    }

	for (let i = 1; i <= limit; i++) {
	console.log(base, 'X', i, '=', base * i);
}

}