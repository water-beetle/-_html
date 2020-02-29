var columns = [];
var rows = [];
body = document.querySelector('body');

document.querySelector('#exec').addEventListener('click', function(){
	var row_num = document.querySelector('#hor').value;
	var column_num = document.querySelector('#ver').value;
	console.log(row_num, column_num);
	for(var i=0; i<column_num; i+=1) {
		column = document.createElement('tr');
		columns.push(column);
		rows.push([]);
		for(var j=0; j<row_num; j+=1) {
			row = document.createElement('td');
			rows[i].push(row);
			column.appendChild(row);
		}
		body.appendChild(column);
		
	}
	console.log("column" , columns);
		console.log("row", rows);
})