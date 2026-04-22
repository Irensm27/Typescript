//– створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.
//
// let nums = [11,21,3];
//
// sortNums(nums,’ascending’) // [3,11,21]
//
// sortNums(nums,’descending’) // [21,11,3]
let nums:number[] = [11,21,3];
function sortNums (arrayOfNums:number[],direction:string):number[] {
    if (direction === 'ascending') {
        return  arrayOfNums.sort((a:number, b:number):number => a - b);}
    if (direction === 'descending') {
        return  arrayOfNums.sort((a:number, b:number):number => b - a);}
    return arrayOfNums
}

console.log(sortNums(nums, 'descending'));