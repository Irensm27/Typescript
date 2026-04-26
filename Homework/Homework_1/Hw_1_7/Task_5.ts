//– Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі order по зростанню. (sort)

class Client1 {
    id: number;
    name: string;
    surname: string;
    email: string;
    phone: string;
    order: Product[];

    constructor(id:number, name:string, surname:string , email:string, phone:string, order:Product[]) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }}

class Product{
    title:string;
    price:number;
    constructor(title:string, price:number) {
        this.title = title;
        this.price = price;
    }}

let clients:Client1[] = [
    new Client1(1, 'Ira', 'Ivanets', 'Ivanets@gm.com', '+38014', [new  Product('Phone', 10000), new Product('laptop', 25000)]),
    new Client1(2, 'Ivan', 'qwe', 'Ivanets@gm.com', '+38015', [new  Product('soundbar', 15000), new Product('laptop', 25000)]),
    new Client1(3, 'Katya', 'rty', 'Ivanets@gm.com', '+38016',[ new  Product('tv', 18000)]),
    new Client1(4, 'Artem', 'rtyu', 'Ivanets@gm.com', '+3801447', [new  Product('bake', 7000), new Product('headphones', 2000)]),
    new Client1(5, 'Natasha', 'uiop', 'Ivanets@gm.com', '+3801425', [new Product('tv', 17000)]),
    new Client1(6, 'Kolya', 'xcvn', 'Ivanets@gm.com', '+3801447', [new Product('soundbar', 7000)]),
    new Client1(7, 'Viktoria', 'zxcv', 'Ivanets@gm.com', '+3801410', [new Product('tv', 18000), new Product('bake', 7000)]),
    new Client1(8, 'Kristina', 'fghj', 'Ivanets@gm.com', '+3801479', [new  Product('phone', 18000), new Product('bake', 7000)]),
    new Client1(9, 'Oleg', 'Ifghjk', 'Ivanets@gm.com', '+3801452', [new Product('headphones', 4000),new Product('laptop', 7000)]),
    new Client1(10, 'Kostya', 'zxcvbg', 'Ivanets@gm.com', '+3801434', [new Product('tv', 45000), new Product('bake', 12000)]),
];

console.log(clients.sort((a, b) => a.order.length - b.order.length));