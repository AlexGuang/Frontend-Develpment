const express = require("express");
const bodyParser = require("body-parser");
const urlencoded = require("body-parser/lib/types/urlencoded");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    //res.send("<h1>这是一个返回内容<br>你好，世界！</h1>");
    res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res) {

    var result = Number(req.body.firstNum) + Number(req.body.secondNum);
    res.send("The result of first number plus second number is: " + result);
})

app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
    var bmiNum = Number(req.body.weight) / (Math.pow((Number(req.body.height)), 2));

    res.send("Your BMI is " + bmiNum);
})
app.listen(3000, function() {
    console.log("Server is runing on port of 3000");
});