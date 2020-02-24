var body = document.body;
var table = document.createElement('table');
var who_win = document.createElement('div');
body.appendChild(who_win);
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
		console.log("1, 2 ,3 =" + rows[columns_num][0], rows[columns_num][1], rows[columns_num][2])
		var isWin = false;
	//가로줄 검사
	if(rows[columns_num][0].textContent == turn && rows[columns_num][1].textContent == turn && rows[columns_num][2].textContent == turn) {
		isWin = true;	
	}
	//세로줄 검사
	if(rows[0][rows_num].textContent == turn && rows[1][rows_num].textContent == turn && rows[2][rows_num].textContent == turn) {
		isWin = true;	
	}
	//대각선 검사
	if((columns_num - rows_num) %2 == 0) {
		if(rows[0][0].textContent == turn && rows[1][1].textContent == turn && rows[2][2].textContent == turn) {
			isWin = true;
		}
		if(rows[0][2].textContent == turn && rows[1][1].textContent == turn && rows[2][0].textContent == turn) {
			isWin = true;
		}
	}
	if(isWin) {
		who_win.textContent = turn + '의 승리'
		//초기화
		rows.forEach(function (a){
			a.forEach(function (b) {
				b.textContent = "";
			})
			
		})
	} else {
		if(turn == 'O')
			turn = 'X';
		else
			turn = 'O';
		}
		}	
		
	
		
	}
	
// 세칸이 다 채워졌는가?
	


for(i=1; i<=3; i+=1) {
    var column = document.createElement('tr');
    columns.push(column);
    rows.push([]);
    for(j=1; j<=3 ;j+=1) {
        var row = document.createElement('td');
        row.addEventListener('click',비동기콜백);
		/* (내생각) 콜백함수를 for문안에 넣는 이유는
			for문내에서 각 버튼에 해당하는 row[0][0]~row[2][2].addEventListener를 만들고
			클릭하면 해당되는 addEventListener를 실행하도록 하기 위해서인것같다 */
        rows[i-1].push(row);
        column.appendChild(row);
    }
     table.appendChild(column);
}
body.appendChild(table)



