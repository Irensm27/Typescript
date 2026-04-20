//– створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
const sum = (arr:number[]):number => {
    let a:number = 0;
    for (const arrElement of arr) {
        a = a+ arrElement;
    }
    return a;
}
console.log(sum([0, 5, 3]));