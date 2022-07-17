//jshint esversion:6
//require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const encrypt = require("mongoose-encryption");
//const md5 = require("md5");
//const bcrypt = require("bcrypt");
const passport = require("passport");
const passportLocal = require("passport-local");
const session = require("express-session");
const passportLocalMongoose = require("passport-local-mongoose");



const app = express();
const saltRounds = 10;

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(session({
    secret:"Thisisasomethingsecret.",
    resave:false,
    saveUninitialized:false,
    //cookie:{secure:true}
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/HahaDB");

const userSchema = new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    }
});
//const secret = process.env.SECRET;
//userSchema.plugin(encrypt,{secret:secret,encryptedFields:["password"]});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User",userSchema);
passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/",function(req,res){
    res.render("home");
});
app.get("/register",function(req,res){
    res.render("register");
});
app.get("/login",function(req,res){
    res.render("login");
});

app.get("/secrets",function(req,res){
    if(req.isAuthenticated() ){
        res.render("secrets");
    }
    else{
        res.redirect("/login");
    }
})

app.post("/register",function(req,res){   

   // const username = req.body.username;
   // const password =req.body.password;
   // console.log(username);
   // console.log(password);

User.register({username:req.body.username},req.body.password,function(err,user){
    if(err){
        console.log("cuowu1!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
        console.log(err);
        res.redirect("/register");
    }
    else{
        passport.authenticate("local")(req,res,function(){
            res.redirect("/secrets");
        });
    }
        // const authenticate = User.authenticate();
        // authenticate(req.body.username,req.body.password,function(err,result){
        //     if(err){
        //         console.log("cuowu2___________________________");
        //         console.log(err);
        //     }
        //     else{
        //         res.redirect("secrets");
        //     }
        })
    



    //Below block code is bcrypt method

    // bcrypt.hash(password,saltRounds, function(err,hash){
    //     if (!err){
    //         const userNew = new User({
    //             email : username,
    //             password : hash
    //         });
            
    //         userNew.save(function(err){
    //             if(err){
    //                 console.log(err);
    //             }else{
                    
    //                 res.render("secrets");
    //             }
    //         });
    //     }
    //     else {
    //         console.log(err);
    //     }
       

    // })
   
   
});

app.post("/login",function(req,res){
    const user = new User({
        username:req.body.username,
        password:req.body.password
    })
req.login(user,function(err){
    if(err){
        console.log(err);
    }
    else{
        passport.authenticate("local")(req,res,function(){
            res.redirect("secrets");
        })
    }
}
);


app.get("/logout",function(req,res){
    req.logout(function(err){
        if(err){
            console.log(err);
        }else{
            res.redirect("/");
        }
    });
   
});




    // const username = req.body.username;
    // const password = req.body.password;
    // User.findOne({email:username},function(err,doc){
    //     if(err){
    //         console.log(err);
    //     }else if (doc){
    //         bcrypt.compare(password,doc.password,function(err,result){
    //             if(result === true){
    //                 res.render("secrets");

    //             }
                       
            
    //             else{
    //             res.send("Your input is incorrect!");
    //             }});
            
    //     }
    //     else{
    //         res.send("Not exist!");
    //     }
    // })
})






app.listen(3000,function(){
    console.log("Server is running on port 3000");
});