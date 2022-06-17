const express = require("express");
const bodyParser = require("body-parser");




const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


let items = ["学前端", "到前屋接水", "做饭", "吃饭"];
let workItems = ["做网页"];

app.get("/", function(req, res) {
    let today = new Date();
    let currentDay = today.getDay();
    // if (currentDay === 0 || currentDay === 6) {
    //     var day = "weekend";
    // } else {
    //     var day = "weekday";
    // }
    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }

    day = today.toLocaleDateString("zh-CN", options)
    res.render("list", { pageTitle: day, toDoItems: items });

});
app.post("/", function(req, res) {
    console.log(req.body);
    if (req.body.submitItem === "Work") {
        let workItem = req.body.toDoItem;
        workItems.push(workItem);
        res.redirect("/work");
    } else {
        let item = req.body.toDoItem;
        items.push(item);
        res.redirect("/");
    }

})
app.get("/work", function(req, res) {
    res.render("list", { pageTitle: "Work List", toDoItems: workItems });
});












app.listen(3000, function() {
    console.log("The server is runing on port 3000");
});