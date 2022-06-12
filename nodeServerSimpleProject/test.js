const express = require("express");


const app = express();

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/test.html");
});





app.listen(process.env.PORT || 2000, function() {
    console.log("Server is runing on port 2000");
})