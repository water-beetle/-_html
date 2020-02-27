document.querySelector('#computer').style.background = 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) 0 0';

var three_value = {
	바위 : '0',
	가위 : '-142px',
	보 : '-284px'
}

// 딕셔너리인 three_value를 2차원 배열로 바꾸어줌
console.log(Object.entries(three_value));

//find는 2차원 배열에서 axis=1인 배열을 찾아줌
function computer_choose(computer) {
	return Object.entries(three_value).find(function(v){
		console.log(v);
		return v[1] == computer;
	})[0];
}

var computer = 0;
setInterval(function() {
	if( computer == three_value.바위) {
		computer = three_value.가위;
	} else if (computer == three_value.가위) {
		computer = three_value.보;
	} else {
		computer = three_value.바위
	}
	document.querySelector('#computer').style.background = 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg)' + computer + ' 0';
}, 100);

//버튼을 클릭할때
document.querySelectorAll('.btn').forEach(function(btn){ //forEach
	btn.addEventListener('click', function(){ //.rock은 class 탐색
console.log(this.textContent, computer_choose(computer));
	});
});	


