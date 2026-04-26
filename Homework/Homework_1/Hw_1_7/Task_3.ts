//– Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
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
    new User(9, 'Ivan', 'qwe', 'Ivanets@gm.com', '+38015'),
    new User(3, 'Katya', 'rty', 'Ivanets@gm.com', '+38016'),
    new User(7, 'Artem', 'rtyu', 'Ivanets@gm.com', '+3801447'),
    new User(6, 'Natasha', 'uiop', 'Ivanets@gm.com', '+3801425'),
    new User(5, 'Kolya', 'xcvn', 'Ivanets@gm.com', '+3801447'),
    new User(4, 'Viktoria', 'zxcv', 'Ivanets@gm.com', '+3801410'),
    new User(8, 'Kristina', 'fghj', 'Ivanets@gm.com', '+3801479'),
    new User(2, 'Oleg', 'Ifghjk', 'Ivanets@gm.com', '+3801452'),
    new User(10, 'Kostya', 'zxcvbg', 'Ivanets@gm.com', '+3801434')
]

console.log(arrUser.sort( (a, b) =>a.getId() - b.getId()));