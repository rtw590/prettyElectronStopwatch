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

var input = document.getElementById("Lightness").value
console.log(input)

var hueStart = '291';
var saturation = '76%';
var lightness = '53%';


if (timer.innerText.slice(-2) === '00') {
    var hueChange = (parseInt(hueStart) - 20);
} 


var bk = document.getElementById('bodyBox');

bk.style.backgroundColor = 'hsl('+hueChange+', '+saturation+', '+lightness+')';

function changeOnThirty () {
	console.log(hueChange);
	hueChange = (parseInt(hueChange) - 53);
	bk.style.backgroundColor = 'hsl('+hueChange+', '+saturation+', '+lightness+')';
	console.log(hueChange);
	// console.log('It Happened');
}

function isThirty() {
	// console.log('It Happened');
    if (timer.innerText.slice(-2) === '30') {
		changeOnThirty();
	} 
}

setInterval(isThirty, 1000);

function changeOnDoubleZero () {
	console.log(hueChange);
	hueChange = (parseInt(hueChange) - 53);
	bk.style.backgroundColor = 'hsl('+hueChange+', '+saturation+', '+lightness+')';
	console.log(hueChange);
	// console.log('It Happened');
}

function isDoubleZero() {
	// console.log('It Happened');
    if (timer.innerText.slice(-2) === '00') {
		changeOnDoubleZero();
	} 
}

setInterval(isDoubleZero, 1000);




