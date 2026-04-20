//– створити функцію, яка приймає масив та виводить кожен його елемент
const arrFunction = (arr:any[]) => {
    for (const arrElement of arr) {
        console.log(arrElement)
    }
}
let users = [
    {name: 'Vasya', age:27, status: false},
    {name: 'Olya', age:32, status: true},
    {name: 'Ira', age:14, status: false},
    {name: 'Kate', age:28, status: true},
    {name: 'Vanya', age:24, status: false},
    {name: 'Kolya', age:36, status: false},
    {name: 'Vasya', age:20, status: true},
    {name: 'Kristina', age:25, status: false},]

arrFunction(users);

