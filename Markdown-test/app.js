const express = require("express");
const app = express();
const marked = require("marked");
const mongoose = require("mongoose");
const createDomPurify = require("dompurify");
const ejs = require("ejs");
const{ JSDOM } = require("jsdom");
const dompurify = createDomPurify(new JSDOM().window);

app.set('view engine', 'ejs');

app.use(express.static("public"));


mongoose.connect('mongodb://localhost:27017/markdownTestDB');
blogschema = new mongoose.Schema({
    title:String,
    content: String
});

const Blog = new mongoose.model("Blog",blogschema);

app.get("/", (req,res)=>{
    Blog.find({},(err,docs)=>{
        if(err){
            console.log(err);
        }else{
            res.render("home",{blogs:docs});
        }
    })
})
app.post("/compose",(req,res)=>{
    const newBlog = {
        title:req.body.title,
        content:req.body.content
    };
    Blog.insertMany([newBlog],(err,doc)=>{
        if(err){
            console.log(err);
        }else{
            console.log(doc);
            console.log("Insert succefully!");
            res.redirect("/");
        }
    })
}
)
app.get("/compose",(req,res)=>{
    res.render("compose");
})

app.listen(3000,function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Server is running successfully!");
    }

})