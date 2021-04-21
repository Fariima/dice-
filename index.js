var randomNumber1 = Math.floor(Math.random() * 6) + 1; //random number 1 - 6
var randomDiceimage = "dice" + randomNumber1 + ".png"; // dice image
var randomImageSource = "images/" + randomDiceimage ; // images/dice1-6
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceimage2= "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceimage2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = " 🏁 PLAYER 1 is the WINNER" ;
} else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "PLAYER 2 is the WINNER 🏁" ;

}else {
document.querySelector("h1").innerHTML = "It's a tie" ;
}
