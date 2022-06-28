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


const listSchema =  mongoose.Schema({
    name:String,
    list:[itemSchema]
})

const List = mongoose.model("List",listSchema);
const workItems = ["做网页"];

app.get("/", function(req, res) {   

    Item.find({},function(err,result){
        if(result.length === 0){
            Item.insertMany([study,fetchWater,cook,eating], function(err){
                if(err){
                    console.log(err);
                }
                else{
                    console.log("Succefully launched!");
                }
            });
            res.redirect("/");
        }
        else{
            const day = data.getDate();
            res.render("list", { pageTitle: day, toDoItems: result });
        }
    });   
});
app.post("/delete",function(req,res){
    const itemDelete = req.body.checkbox;
    console.log(itemDelete);
    Item.deleteOne({_id:itemDelete},function(err){
        if(err){
            console.log(err);
        }
        else{
            
            console.log("Successfully delete the item");
            res.redirect("/");
        }
    });
});
app.post("/", function(req, res) {
    console.log(req.body);
    const newItem = req.body.toDoItem;
    const newTitle = req.body.submitItem;
    List.findOne({name:newTitle},function(err,result){
        if(err){
            console.log(err);
        }
        else if(result === null){
            console.log("haha kong");
        }
        else if(newItem === null){
            res.redirect("/"+newTitle);
        }
        else
        {
               const item = new Item({
                name:newItem
               });
           // console.log(result);
            result.list.push(item);
            result.save();
            res.redirect("/"+req.body.submitItem);
        }
    });
    // if (req.body.submitItem === "Work") {
    //     let workItem = req.body.toDoItem;
    //     workItems.push(workItem);
    //     res.redirect("/work");
    // } else {
    //     let item = req.body.toDoItem;
    //     const newItem = new Item({
    //         name: item
    //     });
    //     Item.insertMany([newItem],function(err){
    //         if(err)
    //         {console.log(err);}
    //         else{
    //             console.log("Successfully inserted.");
    //         }
    //     }) 
    //     res.redirect("/");
    // }

});
app.get("/:routers",function(req,res){
    const routersGet = req.params.routers;
    List.findOne({name:routersGet},function(err,list){
        if (err)
        {
            console.log(err);
            console.log(list);
        }
        
        else if (list === null){
            const newList = new List({
                name: routersGet,
                list:[study,fetchWater,cook]
            });
            newList.save();
            res.redirect("/"+ routersGet);
        }
        else{
            res.render("list",{pageTitle :routersGet,toDoItems:list.list} )
        }
    })
   
});
   
    
    

// app.get("/work", function(req, res) {
//     res.render("list", { pageTitle: "Work List", toDoItems: workItems });
// });
app.get("/about",function(req,res){
    res.render("about");
})











app.listen(3000, function() {
    console.log("The server is runing on port 3000");
});