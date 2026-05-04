let priceBlock: HTMLDivElement = document.createElement('div');

let price: number = Number(localStorage.getItem('price')) || 100;
let updateTime: number = Number(localStorage.getItem('updateTime')) || 0;

let now: number = Date.now();

if (now - updateTime >= 10000) {
    price += 10;

    localStorage.setItem('price', price.toString());
    localStorage.setItem('updateTime', now.toString());
}

priceBlock.innerText = price + ' UAH';

document.body.appendChild(priceBlock);