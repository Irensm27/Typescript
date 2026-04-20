function sum(arr:number[]):number {
    let busket:number = 0;
    for (const arrElement of arr) {
        busket = busket + arrElement;
    }
    return busket;}
console.log(sum([1,2,3,4,5,6]));