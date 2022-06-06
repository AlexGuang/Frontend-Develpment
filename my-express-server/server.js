//jshint esversion:6

const express = require("express");
const app = express();

app.get("/", function(req, res) {

    res.send("<h1>Hello World!</h1>");
});
app.get("/contact", function(req, res) {
    res.send("guangmvp@gmail.com");

});
app.get("/hobbies", function(req, res) {
    res.send("<h1>I love gaming, movies and coding</h1>")
})

app.get("/about", function(req, res) {
    res.send("<h2>I am Alexander, I am a professional software developer</h2>");
});
app.listen(3000, function() {
    console.log("Server started on port 3000");
});