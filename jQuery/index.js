$("h1").css("color", "blue");
$(document).keydown(function(event) {
    $("h1").text(event.key);
});
$("h2").on("mouseover", function() {
    $("h2").css("color", "red");
});
$("h2").on("mouseout", function() {
    $("h2").css("color", "yellow");
});