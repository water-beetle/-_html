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
var pick_numbers = shuffle.slice(0,6);
console.log("당첨숫자들", pick_numbers, "보너스", bonus);
	
