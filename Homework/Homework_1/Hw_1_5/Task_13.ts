//– Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250

const exchange = (sumUAH:number,currencyValues:{currency:string, value:number}[],exchangeCurrency:string):number =>{
    for (const item of currencyValues) {
        if(item.currency === exchangeCurrency){
            return sumUAH/item.value;
        }}
    return -1
};
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}], 'USD'));