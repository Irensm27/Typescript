//– створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача
let age = document.createElement('button') as HTMLButtonElement;

let input:HTMLInputElement = document.createElement('input') as HTMLInputElement;
input.type = 'number';

document.body.append(input, age);
age.onclick = function () {
    let age = Number(input.value);
    if (age < 18) {
        document.write('You are young')
    }
    else( document.write('Good'))
}
