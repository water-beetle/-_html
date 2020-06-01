var previous_button = document.querySelector("#previous_button");
var next_button = document.querySelector("#next_button");
var display_month = document.querySelector("#display_month");
var display_year = document.querySelector("#display_year");
var date_array = document.querySelectorAll(".day"); //html 날짜 칸 배열
var html_calendar = document.querySelector(".calendar");//html calendar 태그



var month = {1 : "January" , 2 : "February" , 3 : "March" , 4 : "April" , 5 : "May" , 6 : "June" , 7 : "July" , 8 : "August" , 9 : "September", 10 :"October" , 11 : "November", 12 : "December" };
var month_array = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//요일 계산 함수
function what_day(){
	
	var total_day = 0;
	var pre_year = today_year-1;
	
	total_day = pre_year*365 + (parseInt(pre_year/4) - parseInt(pre_year/100) + parseInt(pre_year/400));
       
	for(var i=1; i<today_month; i++){
		total_day += month_array[i-1];
	 }
	
		if (((today_year % 4 == 0 && today_year % 100 != 0) || (today_year % 400 == 0)) && today_month >=3)
		total_day++;
	
	var answer_day = (total_day+1) % 7;
	return answer_day;
}
	
var today_year = new Date().getFullYear();
var today_month = new Date().getMonth() + 1;
var today_day = what_day();


display_month.textContent = month[today_month];
display_year.textContent = today_year;


//날짜 칸 배열에 달에 따라 날짜 입력
function display_day(){
	var iterate = month_array[today_month-1];
	for(var i = 0 ; i<date_array.length; i++){
		date_array[i].textContent = '';
	}
	if (((today_year % 4 == 0 && today_year % 100 != 0) || (today_year % 400 == 0)) && today_month == 2){
		iterate +=1;
	}
	for(var i = 0 ; i<iterate; i++){
		date_array[i+today_day].textContent = i+1;
	}
}


display_day();


//이전버튼 클릭했을 때
previous_button.addEventListener('click', function(e){
	today_month -=1;
	if(today_month == 0){
		today_month = 12;
		today_year -=1;
		display_year.textContent = today_year;
	}
	display_month.textContent = month[today_month];;
	today_day = what_day();
	display_day();

});
//다음 버튼 클릭했을 때
next_button.addEventListener('click', function(e){
	today_month += 1;
	if(today_month == 13){
		today_month = 1;
		today_year += 1;
		display_year.textContent = today_year;
	}
		
	display_month.textContent = month[today_month];
	today_day = what_day();
	display_day();
})


var click_num = 0;
var click_date_array = new Array; //클릭한 날짜 값 배열

//각각의 날짜칸 선택 했을때의 addEventListener
for(var i=0; i<date_array.length; i++){
	function date_click(j){
		date_array[j].addEventListener('click', function(e){
			
			//date_array에 1(클릭함), 0(클릭안함) id를 추가해줌
			if(date_array[j].id == "1"){ //이미 클릭한 상태일때
				date_array[j].style.backgroundColor="#FFFFFF";
				date_array[j].id = "0";
				click_num -=1;
				click_date_array.pop();
				
			} else { // 클릭 안한 상태일때
				date_array[j].style.backgroundColor="#ccc";
				date_array[j].id="1";
				click_num+=1;
				click_date_array.push(date_array[j].textContent);
			}
			
			
			
			//2번 클릭했을 때 사이에 있는 날짜들 모두 클릭해줌
			if(click_num == 2){			
				for(var i = parseInt(click_date_array[0])+1 ; i < click_date_array[1]; i++){
						date_array[i+today_day-1].style.backgroundColor='#ccc';
				}
				
				display_bar();
				
			}
		})
	};
	
	date_click(i);
}

//날짜를 두개 선택하면 bar형태를 달력에다 그려줌
function display_bar(){
	var click_date_xpos = (parseInt(click_date_array[0]) + parseInt(today_day))%7;
	var click_date_ypos =parseInt((parseInt(click_date_array[0]) + parseInt(today_day))/7)+2 ;
	var click_date_length = click_date_array[1] - click_date_array[0] + 1;
	
	var click_date_column_num = 1;
	if(8-click_date_xpos < click_date_length){
		click_date_column_num += parseInt((click_date_length+click_date_xpos-8)/7)+1;
	}
	
	function make_bar(x_pos, y_pos, length){
		var task_display = document.createElement('section');
		task_display.classList.add('task');
		task_display.classList.add('task--first');
		task_display.textContent = '휴가';
		html_calendar.appendChild(task_display);
		task_display.style.gridColumn = x_pos + '/span ' + length;
		task_display.style.gridRow = y_pos;
	}

	if( click_date_column_num == 1){
		make_bar(click_date_xpos, click_date_ypos, click_date_length);
		console.log(click_date_ypos, click_date_column_num);
		console.log(click_date_ypos+click_date_column_num-1);
	} else{
		make_bar(click_date_xpos, click_date_ypos, click_date_length);
		for(var i = 2; i<=click_date_column_num; i++){
			if(i==click_date_column_num)
				make_bar(1, click_date_ypos+click_date_column_num-1, click_date_length - 7*(click_date_column_num-2)-8+click_date_xpos);
			else
				make_bar(1, i+click_date_ypos-1, 7)
		}
	}
		
	
	
}







