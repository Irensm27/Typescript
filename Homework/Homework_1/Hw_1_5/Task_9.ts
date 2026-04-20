//– створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.

type UserType = {
    id: number,
    name: string,
    age: number
}

const foo = (arr:UserType[]):void=> {
    for (const arrElement of arr) {
        document.write(
            `<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`
        )
    }};

foo([
    {id: 1, name: 'John', age:56},
    {id: 2, name: 'John', age:56},
    {id: 3, name: 'John', age:56},
    {id: 4, name: 'John', age:56},
    {id: 5, name: 'John', age:56}
])