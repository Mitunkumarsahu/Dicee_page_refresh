// Alternate way

// var a = Math.floor(Math.random()*6)+1 ;
// var b = Math.floor(Math.random()*6)+1 ;

// if(a>b) {
//     document.querySelector(".container h1").textContent="🚩First Player Won" ;
// }
// else if(a<b) {
//     document.querySelector(".container h1").textContent="Second Player Won🚩" ;
// }
// else {
//     document.querySelector(".container h1").textContent="🏳️Draw🏳️" ;
// }

// if(a==6) document.querySelector(".img1").setAttribute("src","images/dice6.png") ;
// else if(a==5) document.querySelector(".img1").setAttribute("src","images/dice5.png") ;
// else if(a==4) document.querySelector(".img1").setAttribute("src","images/dice4.png") ;
// else if(a==3) document.querySelector(".img1").setAttribute("src","images/dice3.png") ;
// else if(a==2) document.querySelector(".img1").setAttribute("src","images/dice2.png") ;
// else if(a==1) document.querySelector(".img1").setAttribute("src","images/dice1.png") ;

// if(b==6) document.querySelector(".img2").setAttribute("src","images/dice6.png") ;
// else if(b==5) document.querySelector(".img2").setAttribute("src","images/dice5.png") ;
// else if(b==4) document.querySelector(".img2").setAttribute("src","images/dice4.png") ;
// else if(b==3) document.querySelector(".img2").setAttribute("src","images/dice3.png") ;
// else if(b==2) document.querySelector(".img2").setAttribute("src","images/dice2.png") ;
// else if(b==1) document.querySelector(".img2").setAttribute("src","images/dice1.png") ;





// Math.random() will create value between 0-0.9999999999999999 (16 decimal points)
// by multiplying it with 6, it will give value between 0-5.9999999999999999
// Math.floor() of it will give 0-5
// my adding 1 in it, it will give 0-6  


var randomNumber1 = Math.floor(Math.random() * 6) + 1;  
var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png       concatenation of string
var randomImageSource1 = "images/" + randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {                                      //if player 1 wins
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {                                 //if player 2 wins
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";                        //if match is draw
}

