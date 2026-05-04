let arr:any[] = [];
for (let i = 0; i <=99; i++) {
    arr.push({
        id: i+1,
        title: `Product ${i+1}`,
    })
}

console.log(arr);

let arrayDiv:HTMLDivElement = document.createElement('div');
let buttonPrev:HTMLButtonElement = document.createElement('button');
let buttonNext:HTMLButtonElement = document.createElement('button');
let page:number = 0;
let limit:number = 10;

arrayDiv.append(buttonPrev, buttonNext);
document.body.appendChild(arrayDiv);

function foo():void{
    arrayDiv.innerText= '';
    let start:number = page * limit;
    let end:number = start + limit;
    for (let i = start; i < end; i++) {
        let div:HTMLDivElement = document.createElement('div');
        div.innerText = arr[i].id + ' ' + arr[i].title;
        arrayDiv.appendChild(div);
    }
}
buttonPrev.onclick = function (){
    if (page>0){
        page--;
    }
    foo()
};
buttonNext.onclick = function (){
    if((page+1)*limit < arr.length){
        page++;
        foo()}
};
foo()
