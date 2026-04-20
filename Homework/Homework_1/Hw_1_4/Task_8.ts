type primitive = boolean | string | number

function foobar (array:primitive[]):void{
    document.write(`<ul>`);
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`);
}
foobar([17, 256, 28, 'hello', 'world']);