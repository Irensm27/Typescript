//– створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

type Primitive = number | string | boolean;
const foo = (arr:Primitive[]):void => {document.write(`<ul>`)
    for (const arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }document.write(`</ul>`)
};
foo([27, 'hello', 13, false]);