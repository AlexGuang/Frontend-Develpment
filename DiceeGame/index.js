var playOnePoint = Math.floor((Math.random() * 6) + 1);
var playTwoPoint = Math.floor((Math.random() * 6) + 1);

if (playOnePoint > playTwoPoint) {
    document.querySelector("h1").textContent = "Player 1 wins!";
    document.querySelector(".flag").style.visibility = "visible";
} else if (playOnePoint < playTwoPoint) {
    document.querySelector("h1").textContent = "Player 2 wins!";
    document.querySelector(".flag").style.visibility = "visible";

} else {
    document.querySelector("h1").textContent = "There is no winner, refresh me!";
    document.querySelector(".flag").style.visibility = "hidden";
}

function showImage(point) {
    switch (point) {
        case 1:
            return "images/dice1.png";
        case 2:
            return "images/dice2.png";
        case 3:
            return "images/dice3.png";
        case 4:
            return "images/dice4.png";
        case 5:
            return "images/dice5.png";
        case 6:
            return "images/dice6.png";
    }
}
document.querySelector(".img1").setAttribute("src", showImage(playOnePoint));
document.querySelector(".img2").setAttribute("src", showImage(playTwoPoint));