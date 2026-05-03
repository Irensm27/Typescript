//За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,  в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
// Завдання робити через цикли.
type TypeCoursesAndDurationArray = {
    title: string;
    monthDuration: number;
}

let coursesAndDurationArray: TypeCoursesAndDurationArray[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
for (const arrayElement of coursesAndDurationArray) {
    const div:HTMLDivElement = document.createElement('div');
    div.classList.add('item');

    const h1:HTMLHeadingElement = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = arrayElement.title;

    const p:HTMLParagraphElement = document.createElement('p');
    p.classList.add('description');
    p.innerText = `${arrayElement.monthDuration} months`;

    div.append(h1, p);

    document.body.appendChild(div);
}