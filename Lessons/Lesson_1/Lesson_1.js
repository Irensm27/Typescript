// type UserType = {name:string, age:number, status: boolean, greeting:(str:string) => string};
// interface IUser  {name:string, age:number, status: boolean, greeting?:(str:string) => string};
class User {
    constructor(name, age, status) {
        this.name = name;
        this.age = age;
        this.status = status;
    }
}
let user = new User('Iren', 13, false);
let users = [
    { greeting: (str) => 'hello1', name: 'vasya', age: 31, status: false },
    { greeting: (str) => 'hello2', name: 'petya', age: 30, status: true },
    { name: 'kolya', age: 29, status: true },
    { name: 'olya', age: 28, status: false },
    { name: 'max', age: 30, status: true },
    { name: 'anya', age: 31, status: false },
    { name: 'oleg', age: 28, status: false },
    { name: 'andrey', age: 29, status: true },
    { name: 'masha', age: 30, status: true },
    { name: 'olya', age: 31, status: false },
    { name: 'max', age: 31, status: true }
];
console.log(users);
export {};
//# sourceMappingURL=Lesson_1.js.map