var timer = document.getElementById('timer');
var toggleBtn =  document.getElementById('toggle');
var resetBtn =  document.getElementById('reset');

var watch = new Stopwatch(timer);

toggleBtn.addEventListener('click', function(){
	if (watch.isOn){
		watch.stop();
		toggleBtn.textContent = "Start";
	} else {
		watch.start();
		toggleBtn.textContent = "Stop";
	}	
});

resetBtn.addEventListener('click', function(){
	watch.reset();
});



var hueStart = '291';
var saturation = '76%';
var lightness = '53%';



if (timer.innerText === '00 : 00') {
    var hueChange = (parseInt(hueStart) - 20);
} 

if (timer.innerText === '00 : 05') {
    var hueChange = (parseInt(hueStart) - 20);
} 

var bk = document.getElementById('bodyBox');

bk.style.backgroundColor = 'hsl('+hueChange+', '+saturation+', '+lightness+')';


