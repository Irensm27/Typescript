type Created = {
    id: number,
    name: string,
    age: number
}

function foobar(users: Created[]):void {
    for (const user of users) {
        document.write(`<div> ${user.id} ${user.name} ${user.age} </div>`)
    }
}
foobar([
    {id: 1, name: 'John', age:56},
    {id: 2, name: 'John', age:56},
    {id: 3, name: 'John', age:56},
    {id: 4, name: 'John', age:56},
    {id: 5, name: 'John', age:56}
])