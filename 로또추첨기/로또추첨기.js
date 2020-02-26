// 로또 번호 풀 배열 생성

var Lottery_Number = Array(45).fill().map(function (value, index){
	return index+1;
})
//Array(45) - 45칸의 배열 생성
//fill() - Array(45)를 생성하면 값들이 empty가 되는데 값이 empty면 반복문을 못하므로 empty를 undefined로 바꿔주는 함수
// map() - 반환값을 객체와 연결해서 대입해주는 함수

var shuffle = [];
while(Lottery_Number.length > 0) {
	var pick = Lottery_Number.splice(Math.floor(Math.random()*Lottery_Number.length), 1)[0];
	//splice는 배열을 반환하므로 값을 저장하려면 [0]을 추가해준다
	shuffle.push(pick);
}

var bonus = shuffle[shuffle.length-1];
var pick_numbers = shuffle
	.slice(0,6)
	.sort(function (p, c) {
		return p-c;
	})
console.log("당첨숫자들", pick_numbers, "보너스", bonus);

//HTML태그를 id로 선택
var 결과창 = document.getElementById('결과창')

function decorate(num) {
	var ball = document.createElement('div');
	ball.textContent = pick_numbers[num];
	ball.style.display = 'inline-block';
	ball.style.border = '1px solid black'
	ball.style.borderRadius = '10px';
	ball.style.width = '20px';
	ball.style.height = '20px';
	ball.style.textAlign = 'center';
	ball.style.marginRight = '10px'
	ball.id = '공아이디' + num;
	var color;
	if (pick_numbers[num] <=10) {
		color = 'red'
	} else if(pick_numbers[num] <=20) {
		color = 'orange'
	} else if(pick_numbers[num] <=30) {
		color = 'yellow'
	} else if(pick_numbers[num] <=40) {
		color = 'blue'
	} else {
		color = 'green'
	}
	ball.style.background = color;
	결과창.appendChild(ball);
}

setTimeout(function callback(e) {
	decorate(0)}, 1000);
setTimeout(function callback(e) {
	decorate(1)}, 2000);
setTimeout(function callback(e) {
	decorate(2)}, 3000);
setTimeout(function callback(e) {
	decorate(3)}, 4000);
setTimeout(function callback(e) {
	decorate(4)}, 5000);
setTimeout(function callback(e) {
	decorate(5)}, 6000);

setTimeout(function callback(e) {
	var 보너스칸 = document.getElementsByClassName("보너스")[0] // class는 여러번 쓸수 있기 때문에 [0]을 추가해준다
	var ball = document.createElement("div");
	ball.textContent = bonus;
	ball.style.display = 'inline-block';
	ball.style.border = '1px solid black'
	ball.style.borderRadius = '10px';
	ball.style.width = '20px';
	ball.style.height = '20px';
	ball.style.textAlign = 'center';
	보너스칸.appendChild(ball);}, 7000);













