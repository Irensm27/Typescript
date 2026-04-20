function foobar(array:any[]):void{
    for (const element of array) {
        console.log(element);
    }
}
type usersType = {
    name: string,
    age: number,
    status:boolean
};
let users:usersType[] = [
    {name: 'Vasya', age:27, status: false},
    {name: 'Olya', age:32, status: true},
    {name: 'Ira', age:14, status: false},
    {name: 'Kate', age:28, status: true},
    {name: 'Vanya', age:24, status: false},
    {name: 'Kolya', age:36, status: false},
    {name: 'Vasya', age:20, status: true},
    {name: 'Kristina', age:25, status: false},
    {name: 'Vasya', age:17, status: false},
    {name: 'Vasya', age:45, status: false},
    {name: 'Vasya', age:54, status: false}];
foobar(users);