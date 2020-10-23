var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");



function animation(e){
  e.classList.remove("bounce");
  e.offsetWidth = btn1.offsetWidth;
  e.classList.add("bounce");  
}

document.addEventListener('keydown', (event) => {
  var audio = new Audio("audio/1do.wav");
  if (event.key == 'a') {
    audio.play();  
    animation(btn1);
  }
});

document.addEventListener('keydown', (event) => {
  var audio = new Audio("audio/2re.wav");
  if (event.key == 's') {
    audio.play();
    animation(btn2);  
  }
});
document.addEventListener('keydown', (event) => {
  var audio = new Audio("audio/3mi.wav");
  if (event.key == 'd') {
    audio.play();
    animation(btn3);  
  }
});
document.addEventListener('keydown', (event) => {
  var audio = new Audio("audio/4fa.wav");
  if (event.key == 'f') {
    audio.play();
    animation(btn4);
  }
});
document.addEventListener('keydown', (event) => {
  var audio = new Audio("audio/5sol.wav");
  if (event.key == 'h') {
    audio.play();
    animation(btn5);
  }
});
document.addEventListener('keydown', (event) => {
  var audio = new Audio("audio/6la.wav");
  if (event.key == 'j') {
    audio.play();
    animation(btn6); 
  }
});
document.addEventListener('keydown', (event) => {
  var audio = new Audio("audio/7si.wav");
  if (event.key == 'k') {
    audio.play();
    animation(btn7); 
  }
});
document.addEventListener('keydown', (event) => {
  var audio = new Audio("audio/8do.wav");
  if (event.key == 'l') {
    audio.play();
    animation(btn8);
  }
});


btn1.addEventListener("click",function() {
  var audio = new Audio("audio/1do.wav");
  audio.play();
  animation(btn1);
});
btn2.addEventListener("click",function() {
  var audio = new Audio("audio/1do.wav");
  audio.play();
  animation(btn2);
});
btn3.addEventListener("click",function() {
  var audio = new Audio("audio/1do.wav");
  audio.play();
  animation(btn3);
});
btn4.addEventListener("click",function() {
  var audio = new Audio("audio/1do.wav");
  audio.play();
  animation(btn4);
});
btn5.addEventListener("click",function() {
  var audio = new Audio("audio/1do.wav");
  audio.play();
  animation(btn5);
});
btn6.addEventListener("click",function() {
  var audio = new Audio("audio/1do.wav");
  audio.play();
  animation(btn6);
});
btn7.addEventListener("click",function() {
  var audio = new Audio("audio/1do.wav");
  audio.play();
  animation(btn7);
});
btn8.addEventListener("click",function() {
  var audio = new Audio("audio/1do.wav");
  audio.play();
  animation(btn8);
});