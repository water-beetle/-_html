var num_1 = Math.ceil(Math.random()*9); //ceil는 올림함수
var num_2 = Math.ceil(Math.random()*9);
var answer = num_1 * num_2;

var body = document.body;
var word = document.createElement('div');
word.textContent = String(num_1) + '곱하기' + String(num_2) + '는?';
document.body.append(word);
var form = document.createElement('form');
document.body.append(form);
var input = document.createElement('input');
input.type = 'number' 
form.append(input);
var button = document.createElement('button');
button.textContent = "입력";
form.append(button);
var result = document.createElement('div');
document.body.append(result);

form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(answer, input.value); //console에서 값 확인 가능!!
    if(answer === Number(input.value)){
        num_1 = Math.ceil(Math.random()*9); //ceil는 올림함수
        num_2 = Math.ceil(Math.random()*9);
        answer = num_1 * num_2;
        word.textContent = String(num_1) + '곱하기' + String(num_2) + '는?';

        result.textContent = "정답";
        input.value = '';
    } else {
        result.textContent = "오답";
        input.value = '';
    }
});        

