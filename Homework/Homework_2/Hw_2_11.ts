let input:HTMLInputElement = document.createElement('input');
input.type = 'number';
input.placeholder = 'Enter kilos';

let divResult:HTMLDivElement = document.createElement('div');
input.oninput = function():void {
    let kilos:number = Number(input.value);
    let result:number = kilos*2.2;
    divResult.innerHTML = `result: ${result}`;
}
document.body.append(input, divResult);
