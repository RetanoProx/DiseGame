function rollDice() {

var randomNumber1 = Math.ceil (Math.random()*6);

var elmImg1 = document.querySelector('.img1');
var imgSrc1 = elmImg1.getAttribute('src');
var sliceSrc1 = imgSrc1.slice(13, 14);
sliceSrc1 = randomNumber1;
var injection1 = "./images/dice" + sliceSrc1 + ".png";
document.querySelector("body > div > div:nth-child(2) > img").setAttribute("src", injection1);

var randomNumber2 = Math.ceil (Math.random()*6);

var elmImg2 = document.querySelector('.img2');
var imgSrc2 = elmImg2.getAttribute('src');
var sliceSrc2 = imgSrc2.slice(13, 14);
sliceSrc2 = randomNumber2;
var injection2 = "./images/dice" + sliceSrc2 + ".png";
document.querySelector("body > div > div:nth-child(3) > img").setAttribute("src", injection2);

var textHead = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
    textHead.innerHTML = "“🚩”Player 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    textHead.innerHTML = "Player 2 Wins!“🚩”";
} else {
    textHead.innerHTML = "Draw!";
}

}

document.addEventListener('click', rollDice);

rollDice();
