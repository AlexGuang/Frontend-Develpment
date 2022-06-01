for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        this.style.color = "white";

        var buttonInnerHtml = this.innerHTML;
        switch (buttonInnerHtml) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;
            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;
            case "s":
                var tom13 = new Audio("sounds/tom-3.mp3");
                tom13.play();
                break;
            case "d":
                var tom14 = new Audio("sounds/tom-4.mp3");
                tom14.play();
                break;
            case "j":
                var tom16 = new Audio("sounds/snare.mp3");
                tom16.play();
                break;
            case "k":
                var tom15 = new Audio("sounds/crash.mp3");
                tom15.play();
                break;
            case "l":
                var tom17 = new Audio("sounds/kick-bass.mp3");
                tom17.play();
                break;

        }

        //this.style.color = "#DA0463";
    });
}



// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();