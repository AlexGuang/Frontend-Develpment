const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");


mongoose.connect("mongodb://localhost:27017/wikiDB");

const app = express();


app.use(bodyParser.urlencoded({extended:true

}));


const articleSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    }
});
const Aticle = mongoose.model("Aticle",articleSchema);