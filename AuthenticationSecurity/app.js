//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");



const app = express();
mongoose.connect("mongodb://localhost:27017/HahaDB");
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));




const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
const usersSchema ={
    email:String,
    password:String
}

const User = mongoose.model("User",usersSchema);

app.get("/",function(req,res){
    res.render("home");
});
app.get("/register",function(req,res){
    res.render("register");
});
app.get("/login",function(req,res){
    res.render("login");
});
app.post("/register",function(req,res){
    res.render("submit");
});


app.post("/register",function(req,res){
    console.log("hahah");
    const userNew = new User({
        email : req.body.username,
        password : req.body.password
    });
    console.log(userNew);
    userNew.save(function(err){
        if(err){
            console.log(err);
        }else{
            console.log("1232421421");
            console.log(userNew);
            res.render("secrets");
        }
    });
   
});

app.post("login",function(req,res){
    User.findOne({email:req.body.username},function(err,doc){
        if(err){
            console.log(err);
        }else if (doc){
            if(doc.password === req.body.password){
                res.render("secrets");
            }
            else{
                res.send("Your input is incorrect!");
            }
            
        }
        else{
            res.send("Not exist!");
        }
    })
})






app.listen(3000,function(){
    console.log("Server is running on port 3000");
});