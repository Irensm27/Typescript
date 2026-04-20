//– створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
const someList = (text:string, a:number):void => {document.write(`<ul>`)
    for (let i = 0; i < a; i++) {
        document.write(`<li> ${text} </li>`)}
    document.write(`</ul>`)};

someList('hello', 3)