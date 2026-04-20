//– створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
const area = (h:number, r:number):number => 2*Math.PI *r *h;
console.log(area(10, 7));