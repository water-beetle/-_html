var body = document.body;
var table = document.createElement('table');
var columns = [];
var rows = [];

var 비동기콜백 = function(e) {
    console.log(e.target);
}


for(i=1; i<=3; i+=1) {
    var column = document.createElement('tr');
    columns.push([]);
    rows.push([]);
    for(j=1; j<=3 ;j+=1) {
        var row = document.createElement('td');
        row.addEventListener('click',비동기콜백);
        columns[i-1].push(row);
        column.appendChild(row);
    }
     table.appendChild(column);
}
body.appendChild(table)
console.log(columns);

