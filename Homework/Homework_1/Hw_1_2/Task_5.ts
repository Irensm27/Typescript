interface ITemp{
    day:string,
    morningTemp:number,
    dayTemp:number,
    NightTemp:number
}


let temps:ITemp[] = [
    {day:'Monday', morningTemp:12, dayTemp:16, NightTemp:9},
    {day:'Tuesday', morningTemp:14, dayTemp:17, NightTemp:10},
    {day:'Wednesday', morningTemp:9, dayTemp:13, NightTemp:7},
    {day:'Thursday', morningTemp:11, dayTemp:15, NightTemp:8},
    {day:'Friday', morningTemp:13, dayTemp:17, NightTemp:7},
    {day:'Saturday', morningTemp:11, dayTemp:14, NightTemp:8},
    {day:'Sunday', morningTemp:14, dayTemp:17, NightTemp:10}
]
console.log(temps);