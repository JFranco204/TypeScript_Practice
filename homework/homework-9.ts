

export function heroesThatStartsWith( nameList: string[], letter: string ) {
    letter = letter.toUpperCase();
    let newNameList: string[] = [];

    for( let name of nameList ) {
        if ( name.startsWith(letter) ) {
            newNameList.push( name )
        }
    }


    // VERSION 1

    // for( let i = 0; i < nameList.length; i++ ) {

    //     let name = nameList[i];

    //     if ( name.startsWith(letter) ) {
    //         newNameList.push( name )
    //     }

    // }

    return newNameList;
}

let heroes: string[] = ['Doom', 'Dr.Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];

let herosWithLetterS = heroesThatStartsWith( heroes, 'S' );

console.log(herosWithLetterS);

