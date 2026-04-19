let strValue:string | null = prompt('Enter: 1/0/-3');
if (strValue !== null) {
    let numValue:number = Number(strValue);

if(numValue !== 0){
    console.log('Вірно');
}
else {
    console.log('Невірно');
}
}