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

function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    var interpretation;
    if (bmi < 18.5)

    { interpretation = "Your BMI is <" + bmi + ">, so you are underweight."; } else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = "Your BMI is <" + bmi + ">, so you have a normal weight.";
    } else if (bmi > 24.9) {
        interpretation = "Your BMI is <" + bmi + ">, so you overweight.";
    }
    return interpretation;
}
console.log(bmiCalculator(100, 1.73));


//check a guest if in the list
var guestList = ["Frank", "Marry", "Jack", "Coco", "Rose", "Lora"];
var newComing = prompt("Please enter your name:");
if (guestList.includes(newComing)) {
    alert("Welcome!");
} else {
    alert("Sorry, you are not invited.");
}

var arryGame = [];
var number = 0;

function fizzBuzz() {
    number++;
    if (number % 3 === 0) {
        if (number % 15 === 0) {
            arryGame.push("FizzBuzz");
        } else {
            arryGame.push("Fizz")
        }
    } else if (number % 5 === 0) {
        if (number % 15 === 0) {
            arryGame.push("FizzBuzz");
        } else
            arryGame.push("Buzz");
    } else {
        arryGame.push(number);
    }

    console.log(arryGame);
}



var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {

    /******Don't change the code above*******/

    //Write your code here.

    var friends = names;
    var index = Math.floor(Math.random() * 5);
    console.log("index is: " + index);
    return friends[index] + " is going to buy lunch today!";




    /******Don't change the code below*******/
}

console.log(whosPaying(names));


//Lyric of the song:99 bottle of beer
console.log(numberBottles + " bottles of beer on the wall, " + numberBottles + " bottles of beer.");
console.log("Take one down and pass it around, " + numberBottles - 1 + " bottles of beer on the wall");