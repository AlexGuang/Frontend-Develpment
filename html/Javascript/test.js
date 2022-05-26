/*var twitter = prompt("Please input your twitter:").slice(0,20);
var twitterCount = twitter.length 

alert("You have written "+twitterCount+" characters,you have "+(20-twitterCount)+" characters left.");*/

/*var yourName = prompt("Please enter your name:");
var updateName = yourName.slice(0,1).toUpperCase()+ yourName.slice(1,yourName.length).toLowerCase();
alert("Hello, "+updateName);*/
var dogAge = prompt("How old is that dog?");
var humanAge = (dogAge - 2) * 4 + 21;
alert("Age of that dog is like a human age that:" + humanAge);
/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main() {
    //your code here
    moveThree();
    moveTwo();
    moveThree();
    moveTwo();
    moveThree();
}


function moveThree() {
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    move();
    putBeeper();

}

function moveTwo() {
    turnLeft();
    move();
    turnLeft();
    move();
    putBeeper();
    move();
    move();
    putBeeper();
    move();
    turnRight();
    move();
    turnRight();
}

function getMilk() {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
}