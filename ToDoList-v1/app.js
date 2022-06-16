const express = require("express");
const bodyParser = require("body-parser");




const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));


var items = [];

app.get("/", function(req, res) {
    var today = new Date();
    var currentDay = today.getDay();
    // if (currentDay === 0 || currentDay === 6) {
    //     var day = "weekend";
    // } else {
    //     var day = "weekday";
    // }
    var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }

    day = today.toLocaleDateString("zh-CN", options)
    res.render("list", { kindofDay: day, toDoItems: items });

});
app.post("/", function(req, res) {
    var item = req.body.toDoList;
    items.push(item);
    res.redirect("/");
})










app.listen(3000, function() {
    console.log("The server is runing on port 3000");
});