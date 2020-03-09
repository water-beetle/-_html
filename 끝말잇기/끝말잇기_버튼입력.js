var body = document.body;
var word = document.createElement('div');
word.textContent = "Apple"
document.body.append(word) //body에 추가해주어야 적용이 됨

var form = document.createElement('form');
document.body.append(form);
var input_table = document.createElement('input');
form.append(input_table)
var button = document.createElement('button');
button.textContent = "등록"
form.append(button)
var result = document.createElement('div');
document.body.append(result);

//button을 클릭했을때(
form.addEventListener('submit', function(e) {//콜백함수
    e.preventDefault(); //form에서 submit을 하면 새로고침 되는데 기본 default를 막음
    if (word.textContent[word.textContent.length -1] === input_table.value[0]){//입력창 값
        result.textContent = "정답";
        word.textContent = input_table.value;
        input_table.value= "";
        //input_table.focus(); //입력후 커서가 입력창에 다시 생기게하기(크롬에서 오류남)
     }	else{
        result.textContent = "오답";
        input_table= "";
        //input_table.focus();
        }
});
