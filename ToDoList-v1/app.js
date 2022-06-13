const express = require("express");
const bodyParser = require("body-parser");



const app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/weekday.html");
});











app.listen(3000, function() {
    console.log("The server is runing on port 3000");
});