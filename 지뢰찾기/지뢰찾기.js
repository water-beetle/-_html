var columns = [];
var rows = [];
var tbody = document.querySelector('tbody');



document.querySelector('#exec').addEventListener('click', function(){ //실행버튼을 눌렀을때
	
	//지뢰찾기 테이블을 만듬
	var row_num = document.querySelector('#hor').value;
	var column_num = document.querySelector('#ver').value;
	var mine_num = document.querySelector('#mine').value;	

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
		tbody.appendChild(column);
		
		
	}
	console.log(rows);
	
	
	//지뢰찾기 테이블에 지뢰 심기
	var mine_array = Array(row_num*column_num).fill().map(function(val, index){
		return index;
	})
	console.log(mine_array);
	var shuffle_mine_array = [];
	for(var i=0; i<mine_num; i+=1) {
		var pick = mine_array.splice([Math.floor(Math.random()*mine_array.length)], 1)[0];
		shuffle_mine_array.push(pick);
	}
	
	console.log(shuffle_mine_array);
	
	for(var i=0; i<mine_num; i+=1){
		var mine_x_pos = Math.floor(shuffle_mine_array[i]/10);
		var mine_y_pos = ((shuffle_mine_array[i])%10);
		
		tbody.children[mine_x_pos].children[mine_y_pos].textContent = 'X';
		console.log(mine_x_pos, mine_y_pos);
	}
	
	
	
	

	
	
	
	
	
	
	
	
	
	
	
	
})