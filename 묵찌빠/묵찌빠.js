document.querySelector("#computer").style.background = 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) 0 0';
var computer_choice = 0;
//0 0 - 주먹, 165px 0 - 보, 315px 0 - 가위
var my_choice_buttons = document.querySelectorAll('.btn');
var reset_button = document.querySelector('#reset');
//좌표값을 이름으로 바꾸기 위해 변수 설정
var three_value = {
	주먹 : '0',
	보 : '165px',
	가위 : '315px'
}
//승패를 판단하기 위해 변수 설정
var score = {
	주먹 : -1,
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
//가위바위보 승패를 판단해주는 함수
function isWin_first(){
	var my_choice = score[this.textContent];
	var isWin_result = my_choice - score[find_three_value(computer_choice)];
	if(isWin_result )
} 

//컴퓨터 출력 좌표를 계속 바꿔주는 함수
var interval;
function interval_maker() {
	interval =	setInterval(function(){
	if(computer_choice == three_value.주먹) {
		computer_choice = three_value.보;
	} else if(computer_choice == three_value.보) {
		computer_choice = three_value.가위;
	} else {
		computer_choice = three_value.주먹;
	}
	document.querySelector("#computer").style.background = 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg)' + computer_choice +' 0';
	}, 80);
}
interval_maker();
//가위바위보 버튼을 클릭했을 때 
my_choice_buttons.forEach(function(button){
	button.addEventListener('click',function(){
		clearInterval(interval);
		console.log(find_three_value(computer_choice));
	})
})

reset_button.addEventListener('click', function(){
	interval_maker();
})










