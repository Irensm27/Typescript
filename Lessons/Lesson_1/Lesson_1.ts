

// type UserType = {name:string, age:number, status: boolean, greeting:(str:string) => string};

// interface IUser  {name:string, age:number, status: boolean, greeting?:(str:string) => string};

class User {
    name: string;
    age: number;
    status: boolean;

    constructor(name: string, age: number, status: boolean) {
        this.name = name;
        this.age = age;
        this.status = status;
    }
    greeting?:(str:string) => string
}
let user:User = new User('Iren', 13, false);

let users: User[] = [
    {greeting: (str:string) => 'hello1', name: 'vasya', age: 31, status: false},
    {greeting: (str:string) => 'hello2', name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
console.log(users);