var body = document.body;
var word = document.createElement('div');
word.textContent = "Apple"
document.body.append(word) //body에 추가해주어야 적용이 됨

var input_table = document.createElement('input');
document.body.append(input_table)
var button = document.createElement('button');
button.textContent = "등록"
document.body.append(button)
var result = document.createElement('div');
document.body.append(result);

//button을 클릭했을때(
button.addEventListener('click', function() {//콜백함수
    if (word.textContent[word.textContent.length -1] === input_table.value[0]) {//입력창 값
            result.textContent = "정답";
            word.textContent = input_table.value;
        }	else{
            result.textContent = "오답";
        }


});



