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

var input = document.getElementById("Lightness")


input.addEventListener("input", function(){
	var lightness = document.getElementById("Lightness").value.toString() + "%";
	bk.style.backgroundColor = 'hsl('+hueChange+', '+saturation+', '+lightness+')';
})


var hueStart = '291';
var saturation = '76%';
var lightness = '53%';


if (timer.innerText.slice(-2) === '00') {
    var hueChange = (parseInt(hueStart) - 20);
} 


var bk = document.getElementById('bodyBox');

bk.style.backgroundColor = 'hsl('+hueChange+', '+saturation+', '+lightness+')';

function changeOnThirty () {
	hueChange = (parseInt(hueChange) - 53);
	bk.style.backgroundColor = 'hsl('+hueChange+', '+saturation+', '+lightness+')';
}

function isThirty() {
	// console.log('It Happened');
    if (timer.innerText.slice(-2) === '30') {
		changeOnThirty();
	} 
}

setInterval(isThirty, 1000);

function changeOnDoubleZero () {
	hueChange = (parseInt(hueChange) - 53);
	bk.style.backgroundColor = 'hsl('+hueChange+', '+saturation+', '+lightness+')';
}

function isDoubleZero() {
	// console.log('It Happened');
    if (timer.innerText.slice(-2) === '00') {
		changeOnDoubleZero();
	} 
}

setInterval(isDoubleZero, 1000);




