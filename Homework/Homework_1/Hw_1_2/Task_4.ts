interface IUserTask1_4{
    name:string;
    username:string;
    password:string;
}

let users:IUserTask1_4[] = [
    {name:'Ira', username:'asd',password:'1' },
    {name:'Artem', username:'qwe',password:'2' },
    {name:'Alina', username:'rty',password:'3' },
    {name:'Natasha', username:'uio',password:'4' },
    {name:'Tanya', username:'piu',password:'5' },
    {name:'Sasha', username:'tfd',password:'6' },
    {name:'Vanya', username:'fbg',password:'7' },
    {name:'Olga', username:'nfd',password:'8' },
    {name:'Vlad', username:'ngv',password:'9' },
    {name:'Dima', username:'fht',password:'10' },
]
console.log(users[0]!.password);
console.log(users[1]!.password);
console.log(users[2]!.password);
console.log(users[3]!.password);
console.log(users[4]!.password);
console.log(users[5]!.password);
console.log(users[6]!.password);
console.log(users[7]!.password);
console.log(users[8]!.password);
console.log(users[9]!.password);
