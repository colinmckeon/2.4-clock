// alert('Hey Colin!');

(function(){
  "use strict";


function clock(){



var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var background = document.querySelector('.container');
var date = new Date();
var formatedSeconds = date.getSeconds();
var formatedMinutes = date.getMinutes();
var formatedHours = date.getHours();
var currentRed = ('0' + formatedHours.toString(16)).slice(-2);
var currentGreen = ('0' + formatedMinutes.toString(16)).slice(-2);
var currentBlue = ('0' + formatedSeconds.toString(16)).slice(-2);
var colorCode = "#" + currentRed + currentGreen + currentBlue;
var progressBar = document.getElementById('progress');

background.style.backgroundColor = colorCode;

document.querySelector('.container').setAttribute('title', colorCode);


formatedSeconds = ('0'+ formatedSeconds).slice(-2);
formatedMinutes = ('0'+ formatedMinutes).slice(-2);
formatedHours = ('0'+ formatedHours).slice(-2);


seconds.textContent = formatedSeconds;
minutes.textContent = formatedMinutes;
hours.textContent = formatedHours;

progressBar.style.width = (formatedSeconds / 60 * 100) + '%';



background.addEventListener("mouseover", mouseOverFunction);

function mouseOverFunction() {
    background.innerHTML = colorCode;
}


// console.log(formatedHours + ":" + formatedMinutes + ":" + formatedSeconds + colorCode);

} /*end of clock function*/

clock();
setInterval(clock, 1000)


}());
