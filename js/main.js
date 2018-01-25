var timer = document.getElementById('timer');
var toggleBtn =  document.getElementById('toggle');
var resetBtn =  document.getElementById('reset');
var wordLT =  document.getElementById('wordLight');
var audio = new Audio('tone.mp3');


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

var hueStart = '291';
var saturation = '76%';
var lightness = '53';


input.addEventListener("input", function(){
	lightness = document.getElementById("Lightness").value.toString() + "%";
	bk.style.backgroundColor = 'hsl('+hueChange+', '+saturation+', '+lightness+')';
	if (parseInt(lightness) > 70) {
		toggleBtn.style.color = 'black';
		resetBtn.style.color = 'black';
		wordLT.style.color = 'black';
		timer.style.color = 'black';
	}	else	{
		toggleBtn.style.color = 'white';
		resetBtn.style.color = 'white';
		wordLT.style.color = 'white';
		timer.style.color = 'white';
	}
})

if (timer.innerText.slice(-2) === '00') {
    var hueChange = (parseInt(hueStart) - 20);
} 


var bk = document.getElementById('bodyBox');

// bk.style.backgroundColor = 'hsl('+hueChange+', '+saturation+', '+lightness+')';


function changeOnThirty () {
	hueChange = (parseInt(hueChange) - 53);
	bk.style.backgroundColor = 'hsl('+hueChange+', '+saturation+', '+lightness+')';
	audio.play();
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
	audio.play();
}

function isDoubleZero() {
	if (timer.innerText != '00 : 00'){
		if (timer.innerText.slice(-2) === '00') {
			changeOnDoubleZero();
		} 
	}
}

// function isDoubleZero() {
// 	if (timer.innerText.slice(-2) === '00') {
// 		changeOnDoubleZero();
// 	} 
// }

// if (this.isOn){
// 	time += delta();
// }

setInterval(isDoubleZero, 1000);





