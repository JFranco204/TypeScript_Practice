
export let employees: string [] = ['Jhan', 'Franco', 'Uribe'];
export let salaryes: number [] = [1500, 2400, 3200];
//let flowers: string [] = ['Rosa', 'Tulipan', 'Margarita', 'Rosa Azul'];

// if ( people[3] ) {
//    console.log( people[3])
// } 

// for (let i = 0; i < flowers.length; i++) {
//     console.log(flowers[i]);
// }

for (let i = 0; i < employees.length; i++) {
    console.log(employees [i], 'Tiene un salario de:', salaryes [i]);
}

// O tambien podemos usar variables dentro del ciclo FOR
// Por ejemplo:

// for (let i = 0; i < employees.length; i++){
//     let employee = employee [i];
//     let salary = salary [i];
//     console.log( employee, + 'Tiene un salario de: ' + salary);
// }



//Lo que se debe mostrar en CONSOLA ES:
// Jhan tiene un salario de 1500
// Franco tiene un salario de 2400
// Uribe tiene un salario de 3200   