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

let car = new Car('370Z','Nissan', 2018, 290, 5);
console.log(car);
car.drive();
car.info();
car.changeYear(2021);
car.addDriver({name:'Anya'});
car.increaseMaxSpeed(100);
console.log(car)
