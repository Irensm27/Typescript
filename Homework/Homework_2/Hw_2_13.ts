const tableForms = document.createElement('form') as HTMLFormElement;
const result:HTMLDivElement = document.createElement('div');

tableForms.onsubmit = function(e) {
    result.innerText = '';
    e.preventDefault();
    const rows = +tableForms.rows.value;
    const cell = +tableForms.cell.value;
    const info = tableForms.info.value;
    console.log(info, rows, cell);
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < cell; j++) {
            const td = document.createElement('td');
            td.innerText = info;
            tr.appendChild(td)
        }
        result.appendChild(tr);
    }

}