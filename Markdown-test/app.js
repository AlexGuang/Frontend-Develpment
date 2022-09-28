const express = require("express");
const app = express();
const{ marked }= require("marked");

const mongoose = require("mongoose");
const createDomPurify = require("dompurify");
const ejs = require("ejs");
const{ JSDOM } = require("jsdom");
const dompurify = createDomPurify(new JSDOM().window);

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost:27017/markdownTestDB');
blogSchema = new mongoose.Schema({
    title:String,
    content: String,
    markdown:{
        type:String,
        required:true
    },
    sanitizedHtml:{
        type:String,
        required:true
    }
});

blogSchema.pre("validate",function(next){
    if(this.markdown){
        this.sanitizedHtml = dompurify.sanitize(marked(this.markdown))
    }

    next();
})


const Blog = new mongoose.model("Blog",blogSchema);

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
        content:req.body.content,
        markdown:req.body.markdown

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

app.get("/blog/:blogId",(req,res)=>{
    const blogId = req.params.blogId;
    Blog.findOne({_id:blogId},(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.render("blog",{blog:result});
        }
    })
})

app.listen(3000,function(err){
    if(err){
        console.log(err);
    }else{
        console.log("Server is running successfully!");
    }

})