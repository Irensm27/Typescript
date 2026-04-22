//– є масив
//  — відсортувати його за спаданням за monthDuration
//  — відфільтрувати, залишивши тільки курси з тривалістю понад 5 місяців
//  — за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
type CoursesType = {
    title: string,
    monthDuration: number,
}
type MappedCourse = {
    id: number,
    title: string,
    monthDuration: number
};

const coursesAndDurationArray:CoursesType[] = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
const mapedCourses:MappedCourse[]  = coursesAndDurationArray
    .sort((a, b) => b.monthDuration - a.monthDuration)
    .filter(value => value.monthDuration > 5)
    .map((value, index):MappedCourse => ({... value, id: index + 1}))
console.log(mapedCourses);
