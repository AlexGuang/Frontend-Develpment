const express = require("express");
const bodyParser = require("body-parser");
const data = require(__dirname + "/data.js");
const mongoose = require("mongoose");



const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
mongoose.connect("mongodb://127.0.0.1:27017/toDoList");

const itemSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    }
}
);

const Item = mongoose.model("Item",itemSchema);



const study = new Item({
    name:"Study"
});
const fetchWater = new Item({
    name:"Go to fetch water."
});
const cook = new Item({
    name:"Cooking"
   
});
const eating = new Item({
    name:"Eating"
});

// Item.insertMany([study,fetchWater,cook,eating], function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Succefully launched!");
//     }
// });
Item.find({},function(err,result){
    console.log(result);
});


const workItems = ["做网页"];

app.get("/", function(req, res) {
    const day = data.getDate();
    Item.find({},function(err,result){
        res.render("list", { pageTitle: day, toDoItems: result });
    });
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