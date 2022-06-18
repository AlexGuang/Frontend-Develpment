const express = require("express");
const bodyParser = require("body-parser");
const data = require(__dirname + "/data.js");



const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


const items = ["学前端", "到前屋接水", "做饭", "吃饭"];
const workItems = ["做网页"];

app.get("/", function(req, res) {
    const day = data.getDate();
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
app.get("/about",function(req,res){
    res.render("about");
})











app.listen(3000, function() {
    console.log("The server is runing on port 3000");
});