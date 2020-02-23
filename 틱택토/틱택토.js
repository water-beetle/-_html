var body = document.body;
var table = document.createElement('table');
var columns = [];
var rows = [];
var turn = 'X'

var 비동기콜백 = function(e) {
    console.log(e.target); //row
	console.log(e.target.parentNode); //columns
	console.log(e.target.parentNode.parentNode); //table
	
	var columns_num = columns.indexOf(e.target.parentNode);
	var rows_num = rows[columns_num].indexOf(e.target);
	console.log(columns_num)
	console.log(rows_num)
	
	if(rows[columns_num][rows_num].textContent != '') { //칸이 이미 채워져 있는가
		console.log('빈칸아닙니다');  
	} else {
		console.log('빈칸입니다');
		rows[columns_num][rows_num].textContent = turn;
		if(turn == 'O')
			turn = 'X';
		else
			turn = 'O';
		
	}
	
// 세칸이 다 채워졌는가?
	var isWin = false;
	//가로줄 검사
	if(rows[columns_num][0] == turn && rows[columns_num][1] == turn && rows[columns_num][0] == turn) {
		isWin = true;	
	}
	//세로줄 검사
	if(rows[0][rows_num] == turn && rows[1][rows_num] == turn && rows[2][rows_num] == turnn) {
		isWin = true;	
	}
	//대각선 검사
	if(columns_num == rows_num) {
		if(rows[0][0] == turn && rows[1][1] == turn && rows[2][2] == turn) {
			isWin = true;
		}
	}
	if(isWin)
		console.log(turn + '의 승리')
}


for(i=1; i<=3; i+=1) {
    var column = document.createElement('tr');
    columns.push(column);
    rows.push([]);
    for(j=1; j<=3 ;j+=1) {
        var row = document.createElement('td');
        row.addEventListener('click',비동기콜백);
        rows[i-1].push(row);
        column.appendChild(row);
    }
     table.appendChild(column);
}
body.appendChild(table)



