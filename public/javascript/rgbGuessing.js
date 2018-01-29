var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
  	setUpSquares();
	reset();
}

function setUpModeButtons(){
	for(var i=0; i < modeButtons.length; i++){
			modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
  	}	
}

function setUpSquares(){
	for(var i = 0; i < squares.length; i++){
		//add event listeners to squares
		squares[i].addEventListener("click", function(){
		//get color of picked square
		 var clickedColor = this.style.backgroundColor;
		//compare clicked color with picked color
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "CORRECT!";
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?"
		}	else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
			}
		});
	}
}

function reset(){
	//generate new colors
	colors = generateRandomColors(numSquares);
	//pick new random color
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	//reset h1 background color
	h1.style.backgroundColor = "steelblue";
	//reset messageDisplay and resetButton
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
}


resetButton.addEventListener("click", function(){
	reset();
});


function changeColor(color){
	//loop through all squares
	for(var i = 0; i < squares.length; i++){
	//add picked color to all square backgrounds
	squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for(var i = 0; i < num; i++){
		//push random color into array
		arr.push(randomColor());
	}
	//return array
	return arr;
}

function randomColor(){
	//pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick a red from 0 to 255
	var g = Math.floor(Math.random() * 256);
	//pick a red from 0 to 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}