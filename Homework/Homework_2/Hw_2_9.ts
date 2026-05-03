//є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let num:number = Number(localStorage.getItem('num')) || 0;

num += 1;

localStorage.setItem('num', num.toString());

let numberDiv: HTMLDivElement = document.createElement('div');
numberDiv.innerText = num.toString();

document.body.appendChild(numberDiv);