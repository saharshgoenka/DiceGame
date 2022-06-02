var randomNumber1 = Math.random()*6;
var randomNumber2 = Math.random()*6;

randomNumber1 = Math.floor(randomNumber1) + 1;
randomNumber2 = Math.floor(randomNumber2) + 1;

if(randomNumber1 > randomNumber2) {
  var winnerText = "🚩 Player 1 Wins!"
} else if(randomNumber1 < randomNumber2) {
  var winnerText = "🚩 Player 2 Wins!"
} else {
  var winnerText = "🚩 Draw!"
}

var pictureLeft = "images/dice" + randomNumber1 + ".png";
var pictureRight = "images/dice" + randomNumber2 + ".png";

document.querySelector("h1").innerHTML = winnerText;
document.querySelector(".img1").setAttribute("src",pictureLeft);
document.querySelector(".img2").setAttribute("src",pictureRight);
