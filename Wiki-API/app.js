const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


mongoose.connect("mongodb://localhost:27017/wikiDB");

const app = express();


app.use(bodyParser.urlencoded({extended:true

}));
app.set("view engine","ejs");
app.use(express.static("public"));

const articleSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    }
});
const Article = mongoose.model("Article",articleSchema);


// app.get("/articles",function(req,res){
//     Article.find()
// })

app.route("/articles")
.get(function(req,res){
    Article.find(function(err,foundItems){
        if(err){
            console(err);
        }else if(foundItems){
            res.send(foundItems);
        }
        else{
            res.send("There is nothing found!");
        }
    });
});



app.listen(3000,function(){
    console.log("Successfully run the server on port 3000");
})