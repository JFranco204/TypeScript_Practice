
export interface Person {
    name: string
    age: number
    isActive: boolean
}

let franco: Person = {
    age: 21,
    isActive: true,
    name: 'Franco',
}

let Rocky: Person = {
    age: 5,
    isActive: false,
    name: 'Rocky',
}

let Yadira: Person = {
    age: 23,
    isActive: false,
    name: 'Yadira',
}


let people: Person [] = [franco, Rocky, Yadira];

for( let i = 0; i < people.length; i++ ){
    let person = people[i];
    console.log(person.name + ' ' + person.age);
}
