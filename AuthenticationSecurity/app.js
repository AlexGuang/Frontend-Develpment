//jshint esversion:6
//require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const encrypt = require("mongoose-encryption");
const md5 = require("md5");




const app = express();
mongoose.connect("mongodb://localhost:27017/HahaDB");
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));




const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
//const secret = process.env.SECRET;
//userSchema.plugin(encrypt,{secret:secret,encryptedFields:["password"]});



const User = mongoose.model("User",userSchema);

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
    const userNew = new User({
        email : req.body.username,
        password : md5(req.body.password)
    });
    
    userNew.save(function(err){
        if(err){
            console.log(err);
        }else{
            
            res.render("secrets");
        }
    });
   
});

app.post("/login",function(req,res){
    User.findOne({email:req.body.username},function(err,doc){
        if(err){
            console.log(err);
        }else if (doc){
            if(doc.password === md5(req.body.password)){
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