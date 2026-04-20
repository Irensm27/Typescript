//– створити функцію, яка повертає найменше число з масиву
const foo = (arr:number[]):number => {
    if (arr.length === 0) {
        throw new Error('Array is empty');
    }
    let a:number = arr[0]!;
        for (let i = 0; i < arr.length; i++) {
        const arrElement:number = arr[i]!;
        if (arrElement <= a) {
            a = arrElement;
        }
    }return a;
}
console.log(foo([17, 28, 41, 15]));