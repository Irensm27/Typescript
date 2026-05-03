let button = document.getElementById('btn') as HTMLButtonElement;

let htmlDivElement: HTMLDivElement = document.createElement('div');
htmlDivElement.id = 'text';
htmlDivElement.innerText = 'текст';

document.body.appendChild(htmlDivElement);

if (button) {
    button.onclick = function () {
        htmlDivElement.remove();
    }
}