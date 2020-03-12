var screen = document.querySelector('#screen');

var condition = {
	waiting: 0,
	ready: 1,
	now: 2
};

var start_time;
var end_time;
var record = [];
var time_out 
screen.addEventListener('click', function() {
	if (screen.classList.contains('waiting')) {
		screen.classList.remove('waiting');
		screen.classList.add('ready');
		screen.textContent = '초록색이 되면 클릭하세요';
		time_out = setTimeout(function(){
			start_time = new Date(); 
			screen.click();			
		}, Math.floor(Math.random()*1000)+2000);

	
	} else if(screen.classList.contains('ready')) {
		if(time_out){
			screen.classList.remove('ready');
			screen.classList.add('now');
			screen.textContent = "클릭!";
		} else{
			clearTimeout(time_out);
			screen.classList.remove("ready");
			screen.classList.add('now');
			screen.textContent = "클릭해서 시작하세요";
		}
		
	} else if(screen.classList.contains('now'))	{
		end_time = new Date();
		console.log("시간",end_time-start_time);
		record.push(end_time-start_time);
		console.log(record);
		screen.classList.remove('now');
		screen.classList.add('waiting');
		screen.textContent = "클릭해서 시작하세요";
	}
	console.log('클릭');
});