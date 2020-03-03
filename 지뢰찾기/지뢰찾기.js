var dataset = [];
var tbody = document.querySelector('tbody');



document.querySelector('#exec').addEventListener('click', function(){ //실행버튼을 눌렀을때
	//tbody의 내부 태그들을 초기화
	tbody.innerHTML = '';
	
	//지뢰찾기 테이블을 만듬
	var row_num = document.querySelector('#hor').value;
	var column_num = document.querySelector('#ver').value;
	var mine_num = document.querySelector('#mine').value;	

	console.log(row_num, column_num);
	
	for(var i=0; i<column_num; i+=1) {
		column = document.createElement('tr');
		dataset.push([]);
		for(var j=0; j<row_num; j+=1) {
			row = document.createElement('td');
			dataset[i].push(1);
			//contextmenu - 마우스 우클릭 이벤트
			row.addEventListener('contextmenu', function(e){
				e.preventDefault();
				var parent_tr = e.currentTarget.parentNode;
				var parent_tbody = e.currentTarget.parentNode.parentNode;
				var target_column = Array.prototype.indexOf.call(parent_tbody.children, parent_tr);
				var target_row = Array.prototype.indexOf.call(parent_tr.children, e.currentTarget);
				console.log("몇칸", target_column, "몇줄", target_row);
				console.log(dataset[target_column][target_row] == '1')
				if(e.currentTarget.textContent == '' ||e.currentTarget.textContent == 'X') {
					e.currentTarget.textContent = "!";
				} else if(e.currentTarget.textContent == '!') {
					e.currentTarget.textContent = "?";			
				} else if(e.currentTarget.textContent == '?') {
					if(dataset[target_column][target_row] == '1') {
						e.currentTarget.textContent = "";
					} else if(dataset[target_column][target_row] == 'X'){
						e.currentTarget.textContent = "X";
					}
					
				}
				
			
			})
			column.appendChild(row);
		}
		tbody.appendChild(column);
			
	}
	
	
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
		dataset[mine_x_pos][mine_y_pos] = 'X';
		console.log(mine_x_pos, mine_y_pos);
	}	
})






/* if(e.currentTarget.textContent = '') {
					e.currentTarget.textContent = "!";
					dataset[target_column][target_row] = '!';
				} else if(e.currentTarget.textContent = '!') {
					e.currentTarget.textContent = "?";
					dataset[target_column][target_row] = '?';				
				} else {
					e.currentTarget.textContent = ""
					dataset[target_column][target_row] = ''
				} */











