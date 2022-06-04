function gameStart() {
    isStart = true;
    $("h1").text("Game Start!");
    $(".showAnwser").removeClass("hidden");
    $(".cheatSheet").slideUp();
    $("body").removeClass("game-over");
    arrayComputer = [];
    $("h2").text("Level " + (arrayComputer.length + 1));
    $("h3").text("Cheat Sheet");
    arrayPlayer = [];
    currentIndex = 0;
    $("button").remove();
    nextStep();

}

function nextStep() {
    if (isStart === true) {
        $("h2").text("Level " + (arrayComputer.length + 1));
        arrayPlayer = [];
        var currentIndex = arrayComputer.length;
        var randomIndex = Math.floor(Math.random() * 4);
        arrayComputer.push(colorSqure[randomIndex]);
        $("#" + colorSqure[randomIndex]).fadeIn().fadeOut().fadeIn();
        var audio = new Audio("sounds/" + colorSqure[randomIndex] + ".mp3");
        audio.play();
        // document.createElement("div");
        var classCurrent = "btn " + colorSqure[randomIndex];
        $(".showGame").append("<button ></button>");
        $(".showGame").children().last().addClass("btn");
        $(".showGame").children().last().addClass(colorSqure[randomIndex]);
    }


}

function ifLose() {
    if (!isStart || (arrayPlayer[arrayPlayer.length - 1] !== arrayComputer[arrayPlayer.length - 1])) {
        isStart = false;
        audio = new Audio("sounds/wrong.mp3");
        audio.play();
        $("h1").text("Game Over, Press Any Key to Restart:");
        $("body").addClass("game-over");
        $("h2").text("Your Final Level Is Level " + (arrayComputer.length));
        $(".showAnwser").addClass("hidden");
        $(".cheatSheet").slideDown();
        $("h3").text("Right Anwser Is: ")
    }
}


function pressingButton() {

}

var isStart = false;
var arrayComputer;
var arrayPlayer;
var colorSqure = ["green", "red", "yellow", "blue"];
var currentIndex;
for (var i = 0; i < 4; i++) {
    $("#" + colorSqure[i]).on("click", function(event) {
        $(this).addClass("pressed");
        setTimeout(function() {
            $("#" + event.currentTarget.id).removeClass("pressed");
            // $(this).removeClass("pressed");
        }, 100);
        var audio = new Audio("sounds/" + event.currentTarget.id + ".mp3");
        audio.play();
        ifLose();
        arrayPlayer.push(event.currentTarget.id);
        ifLose();

        if (arrayPlayer.length === arrayComputer.length) {
            setTimeout(nextStep, 500);
        }


    })
}
$(document).keydown(function() {
    if (isStart === false) {
        gameStart();
    }

});
$(".cheatSheet").slideUp();
$(".showAnwser").on("click", function() {
    $(this).addClass("pressed");
    setTimeout(function() {

        $(".showAnwser").removeClass("pressed");
    }, 100);
    $(".cheatSheet").slideToggle();
})