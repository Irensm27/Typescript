//[‘Main’,’Products’,’About us’,’Contacts’]
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let arr:string[] = ['Main', 'Products', 'About us', 'Contacts'];

let menu:HTMLUListElement = document.createElement('ul');
menu.classList.add('menu');


for (const arrElement of arr) {
    let li:HTMLLIElement = document.createElement('li');
    li.innerText = arrElement;
    menu.appendChild(li);

}


document.body.appendChild(menu);