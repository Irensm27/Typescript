//– Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//
//     let str = ‘Ревуть воли як ясла повні’;
//
//     let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]

let str:string = 'Ревуть воли як ясла повні';
function  stringToarray (str:string):string[]{
    if (str){
        const split:string[] = str.split(' ');
        return split}
    return [''];
}
console.log(stringToarray(str));