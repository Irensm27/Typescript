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

const cinderellas =[
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

export {};

declare global {
    interface Array<T> {
        myFilter(
            callback: (value: T, index: number, array: T[]) => boolean
        ): T[];
    }
}

Array.prototype.myFilter = function <T>(
    this: T[],
    callback: (value: T, index: number, array: T[]) => boolean
): T[] {
    const result: T[] = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i]!, i, this)) {
            result.push(this[i]!);
        }
    }

    return result;
};

const wife = cinderellas.myFilter(
    c => c.footSize === prince.slipper
)[0];

if (wife) {
    prince.wife = wife;
}
console.log(prince);
