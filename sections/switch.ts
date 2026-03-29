//1-Lunes
//2-Martes
//3-Miércoles
//4-Jueves
//5-Viernes 

export let weekDay: number = 5;

if (weekDay <= 0 ) {
    //console.log('Número de día de la semana no válido');  
    throw new Error ('Número de día de la semana no válido');
}

switch (weekDay) {
    //weekDay = 1;
    case 1:
        console.log ('Hoy es Lunes');
        break;
    //weekDay = 2;
    case 2:
        console.log('Hoy es Martes');
        break;
    //weekDay = 3;
    case 3:
        console.log('Hoy es Miercoles');
        break;
    //weekDay = 4;
    case 4: 
        console.log('Hoy es Jueves');
        break;
    //weekDay = 5;
    case 5:
        console.log('Hoy es Viernes');
        break;  

     default:
    console.log('Hoy no es ningún día de la semana');
}