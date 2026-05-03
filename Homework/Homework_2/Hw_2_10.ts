let container: HTMLDivElement = document.createElement('div');

const sessionsList = JSON.parse(localStorage.getItem('sessionList') || '[]');

for (const item of sessionsList) {
    let div: HTMLDivElement = document.createElement('div');
    div.innerText = typeof item === 'object'
        ? JSON.stringify(item)
        : item;

    container.appendChild(div);
}

document.body.appendChild(container);







// let sessionList = JSON.parse(localStorage.getItem('sessionList')) || [];
// sessionList.push(new Date());
// localStorage.setItem('sessionList', JSON.stringify(sessionList));