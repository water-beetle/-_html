var dataset = [];
var tbody = document.querySelector('tbody');
var result = document.querySelector('#result');
var flag = false;
var open_num;
document.querySelector('#exec').addEventListener('click', function(){ //실행버튼을 눌렀을때
	//tbody의 내부 태그들을 초기화
	tbody.innerHTML = '';
	dataset = [];
	open_num = 0;
	
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
			dataset[i].push(0);
			//contextmenu - 마우스 우클릭을 했을 때(지뢰, 느낌표, 물음표 출력)
			row.addEventListener('contextmenu', function(e){
				e.preventDefault();
				var parent_tr = e.currentTarget.parentNode;
				var parent_tbody = e.currentTarget.parentNode.parentNode;
				var target_column = Array.prototype.indexOf.call(parent_tbody.children, parent_tr);
				var target_row = Array.prototype.indexOf.call(parent_tr.children, e.currentTarget);
				console.log("몇칸", target_column, "몇줄", target_row);
				console.log(dataset[target_column][target_row] == '1')
				if(e.currentTarget.textContent == '' ||e.currentTarget.textContent == 'X') {
					e.currentTarget.classList.add('mine');
					e.currentTarget.textContent = "!";
				} else if(e.currentTarget.textContent == '!') {
					e.currentTarget.textContent = "?";	
				} else if(e.currentTarget.textContent == '?') {
					if(dataset[target_column][target_row] == '0') {
						e.currentTarget.textContent = "";
					} else if(dataset[target_column][target_row] == 'X'){
						e.currentTarget.textContent = "X";
					}
					
				}
				
			
			})
			//click - 마우스 클릭했을때(주변 지뢰개수 세어줌)
			row.addEventListener('click', function(e){
				if(flag) {
					return ;
				}
				if(e.currentTarget.textContent == "!" || e.currentTarget.textContent =='?') {
					return;
				}
				var parent_tr = e.currentTarget.parentNode;
				var parent_tbody = e.currentTarget.parentNode.parentNode;
				var target_column = Array.prototype.indexOf.call(parent_tbody.children, parent_tr);
				var target_row = Array.prototype.indexOf.call(parent_tr.children, e.currentTarget);
				e.currentTarget.classList.add('opened');
				open_num +=1;
				console.log(open_num)
				if(dataset[target_column][target_row] == 'X') { // 클릭했을때 지뢰인 경우
					e.currentTarget.textContent = "펑!"
					result.textContent = "실패"
					flag = true;
				} else { //클릭했을때 지뢰가 아닌 경우(주변 지뢰 개수 세어줌)
					dataset[target_column][target_row] = 1;
					var around = [dataset[target_column][target_row-1], dataset[target_column][target_row+1]];
					if(dataset[target_column-1]) {
						around = around.concat(dataset[target_column-1][target_row-1], dataset[target_column-1][target_row], dataset[target_column-1][target_row+1])
					}
					if(dataset[target_column+1]) {
						around = around.concat(dataset[target_column+1][target_row-1], dataset[target_column+1][target_row], dataset[target_column+1][target_row+1])
					}
					around_mine = around.filter(function(v){ //filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
						return v === 'X';
					}).length;
					//주변 지뢰개수가 0일때 인접칸 열기
					 e.currentTarget.textContent = around_mine || ''; // 주변지뢰개수가 false 일때 ''표시
					
					if(around_mine == 0){
						var around_mine_array = [];
						if(tbody.children[target_column-1]) {
							around_mine_array = around_mine_array.concat([
								tbody.children[target_column-1].children[target_row-1], 
								tbody.children[target_column-1].children[target_row], 
								tbody.children[target_column-1].children[target_row+1]]);
						}
						around_mine_array = around_mine_array.concat([
							tbody.children[target_column].children[target_row-1],
							tbody.children[target_column].children[target_row+1]]);
						if(tbody.children[target_column+1]) {
							around_mine_array = around_mine_array.concat([
								tbody.children[target_column+1].children[target_row-1],
								tbody.children[target_column+1].children[target_row],
								tbody.children[target_column+1].children[target_row+1]
							])
						};
						around_mine_array.filter(function(v){
							return v;
						}).forEach(function(v){
							var parent_tr = v.parentNode;
							var parent_tbody = v.parentNode.parentNode;
							var target_column = Array.prototype.indexOf.call(parent_tbody.children, parent_tr);
							var target_row = Array.prototype.indexOf.call(parent_tr.children, v);
							if(dataset[target_column][target_row] !=1)
								v.click();
						});


					}
					
					
				}
				if(open_num == column_num*row_num - mine_num) {
					result.textContent = "승리";
				}
			});
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
		var mine_x_pos = Math.floor(shuffle_mine_array[i]/row_num);
		var mine_y_pos = ((shuffle_mine_array[i])%row_num);
		
		
		dataset[mine_x_pos][mine_y_pos] = 'X';
		console.log(mine_x_pos, mine_y_pos);
	
	}	
})














