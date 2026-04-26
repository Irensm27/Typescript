//– Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
//     — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
//     — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
//     — changeYear (newValue) – змінює рік випуску на значення newValue
//     — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car
type Driver = {name:string};

class Car{
    model:string;
    producer:string;
    year:number;
    maxSpeed:number;
    volume:number;
    driver:Driver;
    constructor(model:string, producer:string, year:number, maxSpeed:number, volume:number) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
        this.driver = {name:''}
    }
    drive ():void{
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} за годину`);
    };
    info ():void{
        for (const kay in this) {
            console.log(kay, this[kay]);}};
    increaseMaxSpeed (speedToAdd:number):void{
        if (speedToAdd > 0)
            this.maxSpeed = this.maxSpeed + speedToAdd;
    };
    changeYear (year:number):void{
        if (year > 1815) this.year = year
    };
    addDriver (driver:Driver):void{
        if (driver) this.driver = driver;
    }
}
let car1 = new Car ('370Z','Nissan', 2018, 290, 5 );
console.log(car1);
car1.drive();
car1.info();
car1.changeYear(2021);
car1.addDriver({name:'Anya'});
car1.increaseMaxSpeed(100);
console.log(car1)
