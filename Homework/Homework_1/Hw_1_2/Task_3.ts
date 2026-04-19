type  Authors = {
    name: string,
    age: number
}[];

type Book = {
    title: string,
    pageCount: number,
    genre: string,
    authors: Authors
};


let book1:Book = {
    title:'A',
    pageCount:100,
    genre:'fantasy',
    authors: [
        {name:'Maria', age:18},
        {name:'Artem', age:27}
    ]
};
let book2:Book = {
    title:'B',
    pageCount:111,
    genre:'romance',
    authors: [
        {name:'Iryna', age:31},
        {name:'Vlad', age:26}
    ]
};
let book3:Book = {
    title:'C',
    pageCount:213,
    genre:'horror',
    authors: [
        {name:'Kostya', age:38},
        {name:'Natasha', age:45}
    ]
};