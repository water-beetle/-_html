var date_array = document.querySelectorAll(".day"); //html 날짜 칸 배열
var click_num = 0;
var click_date_array = new Array; //클릭한 날짜 값 배열


for(var i=0; i<date_array.length; i++){
	function date_click(j){
		date_array[j].addEventListener('click', function(e){
			
			//date_array에 1(클릭함), 0(클릭안함) id를 추가해줌
			if(date_array[j].id == "1"){ //이미 클릭한 상태일때
				date_array[j].style.backgroundColor="#FFFFFF";
				date_array[j].id = "0";
				click_num -=1;
				click_date_array.pop();
				console.log(click_date_array);
				
			} else { // 클릭 안한 상태일때
				date_array[j].style.backgroundColor="#ccc";
				date_array[j].id="1";
				console.log(date_array[j].id);
				click_num+=1;
				click_date_array.push(date_array[j].textContent);
				console.log(date_array[j].value);
			}
			
			
			
			//2번 클릭했을 때 사이에 있는 날짜들 모두 클릭해줌
			if(click_num == 2){
				
				
				/*for(var i = click_date_array[0]+1 ; i < click_date_array[1]; i++){
					
				}*/
			}
		})
	};
	
	date_click(i);
}