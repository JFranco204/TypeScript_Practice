/*
Realizar un programa que muestre la nota
del alumno como: A, B, C, D, F
donde:
A >= 90
B >= 80
C >= 70
D >= 60
F < 60
*/
console.log('Inicio del programa');

export let grade: number = 59;

if (grade >= 90) {
    console.log('Tu nota es de A');
}else if (grade >= 80) {
    console.log('Tu nota es de B');
}else if (grade >= 70) {
    console.log('Tu nota es de C');
}else if (grade >= 60) {
    console.log('Tu nota es de D');
}else {
    console.log('Tu nota es de F');
}

console.log('Segunda Opcion de respuesta');

let note: number = 65;
let grade1: string = 'A'; 
let grade2: string = 'B';
let grade3: string = 'C';
let grade4: string = 'D';   
let grade5: string = 'F';

if (note >= 90) {
    console.log('Tu nota es:', grade1);
}else if (note >= 80) {
    console.log('Tu nota es:', grade2);
}else if (note >= 70) {
    console.log('Tu nota es:', grade3);
}else if (note >= 60) {
    console.log('Tu nota es:', grade4);
}else {
    console.log('Tu nota es:', grade5);
}

console.log('Tercera Opcion de respuesta');

let gradeValue: number = 90;
let gradeLetter: string;

if (gradeValue >= 95) {
    gradeLetter = 'A+';
}else if (gradeValue >= 90) {
    gradeLetter = 'A';
}else if (gradeValue >= 80) {
    gradeLetter = 'B';  
}else if (gradeValue >= 70) {
    gradeLetter = 'C';
}else if (gradeValue >= 60) {
    gradeLetter = 'D';
}else {
    gradeLetter = 'F';
}
console.log('Tu nota es:', gradeLetter);

console.log('Fin del programa');