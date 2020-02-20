var rand_num_list = [1,2,3,4,5,6,7,8,9];
var rand_num = [];

for (var i = 0; i<4 ; i+=1){
    var pop_num = rand_num_list.pop();
    rand_num.push(pop_num);
}
/* push - 마지막에 추가
   pop - 마지막 것 뽑기
   unshift - 처음에 추가
   shift - 처음 것 뽑기 */

console.log(rand_num);

var body = document.body;
var result = document.createElement('h1');
body.append(result);
var form = document.createElement('form');
body.append(form);
var input = document.createElement('input');
form.append(input)
var button = document.createElement('button');
button.textContent = "입력";
form.append(button);

form.addEventListener('submit', function callback(e){

});
