const express = require("express");
const bodyParser = require("body-parser");



const app = express();

app.get("/", function(req, res) {
    var today = new Date();
    var currentDay = today.getDay();
    if (currentDay === 0 || currentDay === 6) {
        res.sendFile(__dirname + "/weekend.html");
    } else {
        res.sendFile(__dirname + "/weekday.html");
    }

});










app.listen(3000, function() {
    console.log("The server is runing on port 3000");
});