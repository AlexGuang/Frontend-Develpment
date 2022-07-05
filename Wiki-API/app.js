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
    title:String,
    content:String
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
})
.post(function(req,res){
   
    Article.insertMany([{title:req.body.title,content:req.body.content}],function(err,doc){
        if(!err){
            console.log("Insert succefully!");
            res.send("insert successfully!");
        }
    });
    
})
.delete(function(req,res){
    Article.deleteMany(function(err,doc){
        if(!err){
            res.send("succeffule deletetd");
        }
    })
});

app.route("/articles/:postedTitle")
.get(function(req,res){
   
    Article.findOne({title:req.params.postedTitle},function(err,doc){
        if(doc){
            res.send(doc);
        }else {
            res.send("Nothing found!");
        }
    });   

})
.put(function(req,res){
    Article.updateOne({title:req.params.postedTitle},
        {title:req.body.title,content:req.body.content},
        function(err,doc){
            if(!err){
                console.log("Update succefully!");
                res.send("update succefully!");

            }else{
                console.log(err);
            }
        });
})
.patch(function(req,res){
    Article.updateOne({
        title:req.params.postedTitle
    },{
        $set:req.body
    },function(err,doc){
        if(!err){
            console.log("update succefully!");
            res.send("succefully! updated")
        }else{
            console.log(err);
        }
    })
})
.delete(function(req,res){
    Article.deleteOne({
        title:req.params.postedTitle
    },function(err,doc){
        if(!err){
            res.send("delete succefully!");
        }
    });
});



app.listen(3000,function(){
    console.log("Successfully run the server on port 3000");
})