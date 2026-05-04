// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
// При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.
const tableForms:HTMLFormElement = document.createElement('form');

const tableRows:HTMLInputElement = document.createElement('input');
tableRows.type = 'number';
tableRows.placeholder = 'Rows';

const tableCell:HTMLInputElement = document.createElement('input');
tableCell.type = 'number';
tableCell.placeholder = 'Cells';

const tableInfo:HTMLInputElement = document.createElement('input');
tableInfo.placeholder = 'Text';

const button:HTMLButtonElement = document.createElement('button');
button.innerText = 'Create';

tableForms.append(tableRows, tableCell, tableInfo, button);

const result: HTMLDivElement = document.createElement('div');

document.body.append(tableForms);

tableForms.onsubmit = function (e): void {
    e.preventDefault();

    result.innerHTML = '';

    const rows:number = Number(tableRows.value);
    const cell:number = Number(tableCell.value);
    const info:string = tableInfo.value;

    const table:HTMLTableElement = document.createElement('table');

    for (let i = 0; i < rows; i++) {
        const tr:HTMLTableRowElement = document.createElement('tr');

        for (let j = 0; j < cell; j++) {
            const td:HTMLTableCellElement = document.createElement('td');
            td.innerText = info;
            tr.appendChild(td);
        }

        table.appendChild(tr);
    }

    result.appendChild(table);
    document.body.append(table);
};
