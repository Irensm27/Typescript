"use strict";
//– Створити функцію конструктор для об’єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об’єктами new User(….)
class User {
    id;
    name;
    surname;
    email;
    phone;
    constructor(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }
}
let arrUser = [
    new User(1, 'Ira', 'Ivanets', 'Ivanets@gm.com', '+38014'),
    new User(2, 'Ivan', 'qwe', 'Ivanets@gm.com', '+38015'),
    new User(3, 'Katya', 'rty', 'Ivanets@gm.com', '+38016'),
    new User(4, 'Artem', 'rtyu', 'Ivanets@gm.com', '+3801447'),
    new User(5, 'Natasha', 'uiop', 'Ivanets@gm.com', '+3801425'),
    new User(6, 'Kolya', 'xcvn', 'Ivanets@gm.com', '+3801447'),
    new User(7, 'Viktoria', 'zxcv', 'Ivanets@gm.com', '+3801410'),
    new User(8, 'Kristina', 'fghj', 'Ivanets@gm.com', '+3801479'),
    new User(9, 'Oleg', 'Ifghjk', 'Ivanets@gm.com', '+3801452'),
    new User(10, 'Kostya', 'zxcvbg', 'Ivanets@gm.com', '+3801434')
];
console.log(arrUser);
