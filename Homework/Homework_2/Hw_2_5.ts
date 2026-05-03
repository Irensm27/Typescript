type TypeCoursesArray ={
    title: string;
    monthDuration: number;
    hourDuration: number;
    modules: string[];
}

let coursesArray:TypeCoursesArray[] = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

for (const coursesElement of coursesArray) {
    const divMain:HTMLDivElement = document.createElement('div');
    divMain.classList.add('divMain')

    const divTittle:HTMLDivElement = document.createElement('div');
    divTittle.innerText = coursesElement.title;
    divTittle.classList.add('divTittle');

    const divMonth:HTMLDivElement = document.createElement('div');
    divMonth.innerText = `Month: ${coursesElement.monthDuration}`;
    divMonth.classList.add('divMonth');

    const divHour:HTMLDivElement = document.createElement('div');
    divHour.innerText = `Hours: ${coursesElement.hourDuration}`;
    divHour.classList.add('divHour');

    const divMH:HTMLDivElement = document.createElement('div');
    divMH.classList.add('divMH');
    divMH.append(divMonth, divHour);


    const divModules:HTMLDivElement = document.createElement('div');
    const ul:HTMLUListElement = document.createElement('ul');
    for (const ulElement of coursesElement.modules) {
        const li:HTMLLIElement = document.createElement('li');
        li.innerText = ulElement;
        ul.appendChild(li);
    }
    divModules.classList.add('divModules');
    divModules.appendChild(ul);

    divMain.append(divTittle, divMH, divModules);
    document.body.appendChild(divMain);
}