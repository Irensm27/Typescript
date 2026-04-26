//– створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
// ! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку

class Cinderella {
    name: string;
    age: number;
    footSize: number;

    constructor(name:string, age:number, footSize:number) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince{
    name: string;
    age: number;
    slipper: number;
    wife?: Cinderella;

    constructor(name:string, age:number, slipper:number) {
        this.name = name;
        this.age = age;
        this.slipper = slipper;

    }
}

const cinderellas:Cinderella[] =[
    new Cinderella('Kristina', 19, 34),
    new Cinderella('Katya', 18, 35),
    new Cinderella('Angelina', 20, 36),
    new Cinderella('Natasha', 19, 37),
    new Cinderella('Anastasia', 21, 38),
    new Cinderella('Karina', 23, 39),
    new Cinderella('Olya', 19, 37.5),
    new Cinderella('Ira', 18, 34.5),
    new Cinderella('Alina', 18, 36.5),
    new Cinderella('Kristina', 21, 38.5)
]

const prince = new Prince('Artem', 20, 36);

for (const cinderella of cinderellas) {
    if(cinderella.footSize === prince.slipper){
        prince.wife = cinderella
        console.log(prince)
    }
}

const cinderella2: Cinderella | undefined = cinderellas.find(cinderella => (cinderella.footSize === prince.slipper));
// prince.wife = cinderella2;

if (cinderella2) {
    prince.wife = cinderella2;
}

console.log(prince);
