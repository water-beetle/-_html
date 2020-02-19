var word = "Apple"
while (true) {
    var answer = prompt(word);
    if (word[word.length -1] === answer[0]) {
        alert('정답');
        word = answer;
    }	else{
        alert('오답');
    }
}
