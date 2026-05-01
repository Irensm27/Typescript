// let elementsByClassNameTarget:HTMLCollectionOf<Element> = document.getElementsByClassName('target');
// console.log(elementsByClassNameTarget);
//
// let elementsByTagNameDiv:HTMLCollectionOf<HTMLDivElement> = document.getElementsByTagName('div');
//
// let forms:HTMLCollectionOf<HTMLFormElement> = document.forms;
// let f1:HTMLFormElement = forms[0]!;
// console.log(f1.username);

// let p:HTMLParagraphElement = document.createElement('p');
type UsersType = {
    name: string;
    username: string;
    password: string;
}

let users:UsersType[] = [
    {name:'Ira', username:'asd',password:'1' },
    {name:'Artem', username:'qwe',password:'2' },
    {name:'Alina', username:'rty',password:'3' },
    {name:'Natasha', username:'uio',password:'4' },
    {name:'Tanya', username:'piu',password:'5' },
    {name:'Sasha', username:'tfd',password:'6' },
    {name:'Vanya', username:'fbg',password:'7' },
    {name:'Olga', username:'nfd',password:'8' },
    {name:'Vlad', username:'ngv',password:'9' },
    {name:'Dima', username:'fht',password:'10' },
]
for (const user of users) {
    
}



