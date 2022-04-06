// create two variables for random numbers for each player
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;
// image variables - changing depending on random number
var images1 = "images/dice"+ randomNumber1 +".png";
var images2 = "images/dice"+ randomNumber2 +".png";
// replace img with setAttribute()
document.querySelector(".dice .img1").setAttribute("src",images1);
document.querySelector(".dice .img2").setAttribute("src",images2);

// if there is a draw
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "😼 Ana Wins!";
}
// if player 2 wins
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "DoHyun Wins 🤣!";
}
// if player 1 wins
else {
    document.querySelector("h1").innerHTML = "Draw!";
}
