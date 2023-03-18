var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("bttn");
var h3 = document.getElementById("h3");


function setGradient (){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function newBackground() {
  color1.value = colors();
  color2.value = colors();
  setGradient();
}


function colors (){
	var col = "#"+(Math.random()*0xFFFFFF<<0).toString(16);
	return col;
}

setGradient();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", newBackground)