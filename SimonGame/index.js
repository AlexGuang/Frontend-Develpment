 $(document).keydown(function() {
     var newClick;
     $("h1").text("Game Start!");

     var arrayComputer = [];
     var arrayPlayer = [];
     var isWrong = false;
     do {
         var newNum = Math.floor(Math.random() * 4 + 1);
         arrayComputer.push(newNum);
         switch (newNum) {
             case 1:
                 $("green").fadeIn(100).fadeOut(100).fadeIn(100);
                 var audio = new Audio("sounds/green.mp3");
                 audio.play();
                 break;
             case 2:
                 $("red").fadeIn(100).fadeOut(100).fadeIn(100);
                 var audio = new Audio("sounds/red.mp3");
                 audio.play();
                 break;
             case 3:
                 $("yellow").fadeIn(100).fadeOut(100).fadeIn(100);
                 var audio = new Audio("sounds/yellow.mp3");
                 audio.play();
                 break;
             case 4:
                 $("blue").fadeIn(100).fadeOut(100).fadeIn(100);
                 var audio = new Audio("sounds/blue.mp3");
                 audio.play();
                 break;

         }
         $("h2").text("Level" + arrayComputer.length);
         for (var i = 0; i < arrayComputer.length; i++) {

             $("#green").on("click", function() {
                 $("p1").text("1");
                 var audio = new Audio("sounds/green.mp3");
                 audio.play();
                 $("#green").addClass("pressed");
                 setTimeout(function() {
                     $("#green").removeClass("pressed")
                 }, 100);

             });
             $("#red").on("click", function() {
                 $("p1").text("2");
                 var audio = new Audio("sounds/red.mp3");
                 audio.play();
                 $("#red").addClass("pressed");
                 setTimeout(function() {
                     $("#red").removeClass("pressed")
                 }, 100);
             });
             $("#yellow").on("click", function() {
                 $("p1").text("3");
                 var audio = new Audio("sounds/yellow.mp3");
                 audio.play();
                 $("#yellow").addClass("pressed");
                 setTimeout(function() {
                     $("#yellow").removeClass("pressed")
                 }, 100);
             });
             $("#blue").on("click", function() {
                 $("p1").text("4");
                 var audio = new Audio("sounds/blue.mp3");
                 audio.play();
                 $("#blue").addClass("pressed");
                 setTimeout(function() {
                     $("#blue").removeClass("pressed")
                 }, 100);
             });
             if ($("p1").text != arrayComputer[i]) {
                 isWrong = true;
                 break;
             }

         }


         //collectClick();

     } while (!isWrong)
     $("h1").text("Game Over, Press Any Key To Start!");

 })


 // $(document).keydown(function() {
 //     alert(newClick);
 // });
 //collectClick();

 function collectClick() {
     $("#green").on("click", function() {
         newClick = 1;
         var audio = new Audio("sounds/green.mp3");
         audio.play();
         $("#green").addClass("pressed");
         setTimeout(function() {
             $("#green").removeClass("pressed")
         }, 100);
     });
     $("#red").on("click", function() {
         newClick = 2;
         var audio = new Audio("sounds/red.mp3");
         audio.play();
         $("#red").addClass("pressed");
         setTimeout(function() {
             $("#red").removeClass("pressed")
         }, 100);
     });
     $("#yellow").on("click", function() {
         newClick = 3;
         var audio = new Audio("sounds/yellow.mp3");
         audio.play();
         $("#yellow").addClass("pressed");
         setTimeout(function() {
             $("#yellow").removeClass("pressed")
         }, 100);
     });
     $("#blue").on("click", function() {
         newClick = 4;
         var audio = new Audio("sounds/blue.mp3");
         audio.play();
         $("#blue").addClass("pressed");
         setTimeout(function() {
             $("#blue").removeClass("pressed")
         }, 100);
     });
 }