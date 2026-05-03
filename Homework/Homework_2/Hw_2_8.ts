//Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом
// let form = document.forms.form;

// let button = form.sendButton;
// console.log(button);
// button.addEventListener('click', () => {
//     let valueName = form.name.value;
//     let valueSurname = form.surname.value;
//     let valueAge = form.age.value;
//     let obj = {valueName, valueSurname, valueAge};
//     console.log(obj);
// })
let form: HTMLFormElement = document.createElement('form');

let nameInput: HTMLInputElement = document.createElement('input');
nameInput.placeholder = 'Name';

let surnameInput: HTMLInputElement = document.createElement('input');
surnameInput.placeholder = 'Surname';

let ageInput: HTMLInputElement = document.createElement('input');
ageInput.type = 'number';
ageInput.placeholder = 'Age';

let button: HTMLButtonElement = document.createElement('button');
button.innerText = 'Send';

let result: HTMLDivElement = document.createElement('div');

form.append(nameInput, surnameInput, ageInput, button);
document.body.append(form, result);

type User = {
    valueName: string;
    valueSurname: string;
    valueAge: number;
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valueName = nameInput.value;
    let valueSurname = surnameInput.value;
    let valueAge = Number(ageInput.value);

    let user: User = { valueName, valueSurname, valueAge };

    console.log(user);

    result.innerHTML = `
        <p>${user.valueName}</p>
        <p>${user.valueSurname}</p>
        <p>${user.valueAge}</p>
    `;
});