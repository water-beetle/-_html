var rand_num_list = [1,2,3,4,5,6,7,8,9];
var rand_num = [];

for (var i = 0; i<4 ; i+=1){
    var pop_num = rand_num_list.splice(Math.floor(Math.random()*(9-i)), 1)[0];
    rand_num.push(pop_num);
}
/* push - 마지막에 추가
   pop - 마지막 것 뽑기
   unshift - 처음에 추가
   shift - 처음 것 뽑기 
   splice(위치, 개수) - 위치로부터 개수만큼 배열에서 뽑음, 배열을 반환*/

console.log(rand_num);

var body = document.body;
var result = document.createElement('h1');
body.append(result);
var form = document.createElement('form');
body.append(form);
var input = document.createElement('input');
input.maxLength = 4;
form.append(input)
var button = document.createElement('button');
button.textContent = "입력";
form.append(button);

form.addEventListener('submit', function callback(e){
    e.preventDefault();
    var answer = input.value;
    console.log(answer, rand_num, answer == rand_num.join('' ));
    //배열.join(구분자) - 배열 안의 값들을 합쳐줌
    //문자.split(구분자) - 문자를 나눠 배열로 만듬
    if(answer == rand_num.join('')){
        result.textContent = '홈런';
        rand_num_list = [1,2,3,4,5,6,7,8,9];
        rand_num = [];
        for (var i = 0; i<4 ; i+=1){
            pop_num = rand_num_list.splice(Math.floor(Math.random()*(9-i)), 1)[0];
            rand_num.push(pop_num);
            }
    }
















});
