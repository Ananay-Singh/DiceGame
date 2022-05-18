var randomNumber1 = (Math.floor((Math.random() * 6)) + 1);
var link1 = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", link1);
var randomNumber2 = (Math.floor((Math.random() * 6)) + 1);
var link2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", link2);
if(randomNumber1>randomNumber2){
  document.querySelector(".headingText").innerHTML="<i class='fa-solid fa-flag'></i>  Player 1 Wins!!!"
}
else if(randomNumber1<randomNumber2){
  document.querySelector(".headingText").innerHTML="Player 2 Wins!!!  <i class='fa-solid fa-flag'></i>"
}
else{
  document.querySelector(".headingText").innerHTML="<i class='fa-solid fa-flag'></i>  Both Players Win!!!  <i class='fa-solid fa-flag'></i>"
}
