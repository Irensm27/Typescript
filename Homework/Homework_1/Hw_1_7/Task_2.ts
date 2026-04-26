//– Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)

class User{
        constructor(private id: number, private name: string, private surname: string, private email: string, private phone: string
    ) {}
    getId(){
        return this.id
    }
    getName(){
        return this.name;
    }
    getSurname(){
        return this.surname;
    }
    getEmail(){
        return this.email;
    }
    getPhone(){
        return this.phone;
    }
}

let arrUser:User[] = [
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
]

console.log(arrUser.filter(user => user.getId() % 2 === 0));