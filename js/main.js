// alert('Hey Colin!');

(function(){
  "use strict";


function clock(){



var hours = document.getElementById('hours');
var minutes = document.getElementById('minutes');
var seconds = document.getElementById('seconds');
var date = new Date();

hours.textContent = date.getHours();
minutes.textContent = date.getMinutes();
seconds.textContent = date.getSeconds();

} /*end of clock function*/

clock();
setInterval(clock, 1000)

console.log(clock);

}());
