//let click = document.querySelector('h1');
//let red= false;

//click.addEventListener('click', function() {
 //if(red){
//   document.body.style.background="red";
//   red = false;
// }else {
  // document.body.style.background="green";
//   red = true;
 //}
//});

//click.addEventListener('click', function(e) {
//document.body.classList.toggle('black');


























/*var p1Button = document.querySelector('#p1');
var p2Button = document.getElementById('p2');
var p1Display = document.querySelector('#p1Display');
var p1Score = 0;
var p2Display = document.querySelector('#p2Display');
var p2Score = 0;
var gameOver = false;
var winningSocore = 5;
var resetButton =document.getElementById('reset');
var numInput = document.querySelector('input');
var winningSocoreDisplay = document.querySelector('p span');

p1Button.addEventListener('click', function() {
if (!gameOver) {
  p1Score++;
  if (p1Score === winningSocore) {
    p1Display.classList.add("winning");
    gameOver = true;
  }
  p1Display.textContent = p1Score;
}

});


p2Button.addEventListener('click', function() {
if (!gameOver) {
  p2Score++;
  if ( p2Score === winningSocore) {
    p2Display.classList.add("winning");
    gameOver = true;
  }
  p2Display.textContent = p2Score;
}
});


resetButton.addEventListener('click', function() {
reset()
});

function reset(){
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove('winning');
  p2Display.classList.remove('winning');
  gameOver = false;
}

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});*/

/*var lis = document.querySelectorAll('li');
 for (var i = 0; i < lis.length; i++) {
   lis[i].addEventListener('mouseover', function() {
     this.classList.add('line');
   });

   lis[i].addEventListener('mouseout', function() {
     this.classList.remove('line');
   });

   lis[i].addEventListener('click', function() {
     this.classList.toggle('kid');
   });

 }*/

var numSquares = 6;
var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');
var colors = generateRandomColors(numSquares);
var resetButton = document.querySelector('#reset');
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('messageDisplay');
var h1 = document.querySelector('h1');
colorDisplay.textContent = pickedColor;



easyBtn.addEventListener('click', function() {
easyBtn.classList.add('selected');
hardBtn.classList.remove('selected');
numSquares = 3;
colors = generateRandomColors(numSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
if (colors[i]) {
     squares[i].style.background = colors[i];
  }else{
    squares[i].style.display = 'none';
   }

 }
});



hardBtn.addEventListener('click', function() {
  easyBtn.classList.remove('selected');
  hardBtn.classList.add('selected');
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;

  for (var i = 0; i < squares.length; i++) {

       squares[i].style.background = colors[i];

      squares[i].style.display = 'block';


   }
});













resetButton.addEventListener('click', function() {
 pickedColor = pickColor();

 colors = generateRandomColors(numSquares);

 colorDisplay.textContent = pickedColor;
  this.textContent ='new colors';
 messageDisplay.textContent = '';

 for(var i = 0; i < squares.length; i++ ){

   squares[i].style.backgroundColor = colors[i];
 }
 h1.style.background = 'steelblue';
});



for(var i = 0; i < squares.length; i++ ){

  squares[i].style.backgroundColor = colors[i];


  squares[i].addEventListener('click', function() {
    var clickedColor = this.style.backgroundColor;

    if (clickedColor === pickedColor) {
    messageDisplay.textContent = 'your right';
    changeColors(clickedColor);
    resetButton.textContent ='play again';
     h1.style.background = clickedColor;
    }else{
    this.style.backgroundColor = 'black';
    messageDisplay.textContent = 'try again';
    }

  });

}


function changeColors (color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
}

function pickColor(){
var random = Math.floor(Math.random() * colors.length);
return colors[random];
}


function generateRandomColors (num) {
var arr = []
for (var i = 0; i < num; i++) {
  arr.push(randomColor())
}
return arr;
}


function randomColor() {
var r =  Math.floor(Math.random() * 256);
var g =  Math.floor(Math.random() * 256);
var b =  Math.floor(Math.random() * 256);
"rgb(r, g, b)"
return "rgb("+ r + ", " + g + ", " + b + ")";
}
