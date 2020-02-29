document.querySelector("#computer").style.background = 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) 0 0';
var result = document.querySelector('#result');
var computer_choice = 0;
//0 0 - 주먹, 165px 0 - 보, 315px 0 - 가위
var my_choice_buttons = document.querySelectorAll('.btn');
var reset_button = document.querySelector('#reset');
//좌표값을 이름으로 바꾸기 위해 변수 설정
var three_value = {
	바위 : '0',
	보 : '165px',
	가위 : '315px'
}
//승패를 판단하기 위해 변수 설정
var score = {
	바위 : -1,
	보 : 0,
	가위 : 1,
}
var isWin = 0;

console.log(computer_choice == '0');
//좌표를 이름으로 바꿔주는 함수
function find_three_value(pos_value) {
	return Object.entries(three_value).find(function(a){
		return pos_value == a[1]; 
	})[0];
} 


//컴퓨터 출력 좌표를 계속 바꿔주는 함수
var interval;
function interval_maker() {
	interval =	setInterval(function(){
	if(computer_choice == three_value.바위) {
		computer_choice = three_value.보;
	} else if(computer_choice == three_value.보) {
		computer_choice = three_value.가위;
	} else {
		computer_choice = three_value.바위;
	}
	document.querySelector("#computer").style.background = 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg)' + computer_choice +' 0';
	}, 1000);
}
interval_maker();
//가위바위보 버튼을 클릭했을 때 
if(isWin == 0) {
	my_choice_buttons.forEach(function(button){
	button.addEventListener('click',function(){
		clearInterval(interval);
		var my_choice = score[this.textContent];
		var isWin_result = my_choice - score[find_three_value(computer_choice)];
		console.log(my_choice, score[find_three_value(computer_choice)], isWin_result);
		if([-2,1].includes(isWin_result) ) {
			result.textContent = "묵찌빠"
			var isWin = 1;
			button.removeEventListener('click', function(){})
		} else if(isWin_result == 0) {
			result.textContent = "비김"
		} else {
			result.textContent = "패배"
		}
	})
})
}

reset_button.addEventListener('click', function(){
	interval_maker();
})


var computer_is_win = 0;
if(isWin == 1) {
	my_choice_buttons.forEach(function(button){
				button.addEventListener('click', function(){
					var computer_choice_second = Object.entries(score)[Math.ceil(Math.random()*3)][1];
					var computer_choice_second_output = three_value[Object.entries(score)[Math.ceil(Math.random()*3)][0]];
					document.querySelector("#computer").style.background = 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg)' + computer_choice_second_output +' 0';												
					if(computer_is_win == 0) {
						if([-2,1].includes(isWin_result) ) {
							result.textContent = "다시"
						} else if(isWin_result == 0) {
							result.textContent = "승리!"
						} else {
							result.textContent = "다시"
							computer_is_win = 1;
						}
					} else {
						if([-2,1].includes(isWin_result) ) {
							result.textContent = "다시"
							computer_is_win = 0;
						} else if(isWin_result == 0) {
							result.textContent = "패배!"
						} else {
							result.textContent = "다시"
						}
					}
				})
			})
}






