
export let person = {
    name: 'Melissa',
    age: 30,
    isActive: true,
    hobbies: ['soccer','baseball'],
    toString () {
        let objetcString = this.name + ' ' + this.age + ' ' + this.hobbies;
        console.log(objetcString)
    }
}

//console.log(person.name);
//person.toString ()

let car = {
    brand: 'Toyota',
    doors: '4',
    color:'Blue',
    year: 2025,
    Engine:'V6',
}

let smarTv = {
    brand: 'LG',
    quality: '4K',
    sizeInches: '55',
    remoteControl: true,
}

let youtubeVideo = {
    title: 'Cursos de programacion',
    description: 'Aprender a programar desde cero con JavaScript/TypeScript',
    minutes: 17,
    comments: ['Buen video', 'Me gusto mucho', 'Excelente explicacion'],
    likes: 1000,
    reproductions: 59000,
}

console.log(car);
console.log(smarTv);        
console.log(youtubeVideo);