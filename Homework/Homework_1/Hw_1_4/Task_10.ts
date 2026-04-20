function arrayMin(numbers:number[]):number{
    let min:number = numbers[0]!;
    for (let i = 1; i < numbers.length; i++) {
        const number:number = numbers[i]!;
        if(number<=min ){
            min = number;
        }
    }
    return min;
}
console.log(arrayMin([1,2,3,4,5, 568, -58, 12]));