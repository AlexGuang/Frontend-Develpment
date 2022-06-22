
const mongoose = require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        min:1,
        max:10
    },
    review: String

});
const Fruit = mongoose.model("Fruit",fruitSchema);
const fruit = new Fruit({
   // name:"Apple",
    rate:10,
    review:"Apple is pretty solid as a fruit."
})

//fruit.save();
// Fruit.updateOne({_id:"62b281cf1937489338c1435f"},{name:"Peach"},function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("Succesfully updated the document.");
//     }
// });



const pineApple = new Fruit({

    name:"Pineapple",
    rating:9,
    review:"Absolute perfect fruit!"
})





const personSchema = new mongoose.Schema({
    name:String,
    age:Number,
    favorateFood:fruitSchema

});


const Person = mongoose.model("Person",personSchema);

const person = new Person({

    name:"Amy",
    age:23,
    favorateFood:pineApple
});
person.save();

Person.updateOne({name:"John"},{favorateFood:pineApple},function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("succeffully updated!");
    }
})

// const kiwi = new Fruit({
//     name:"kiwi",
//     rating:4,
//     review:"not very good"
// });
// const banana = new Fruit({
//     name:"banana",
//     rating:4,
//     review:"Not need wash,pretty good!"
// });
// const orange = new Fruit({
//     name:"orange",
//     rating:6,
//     review:"Contains good nutrition"
// });
// Fruit.insertMany([kiwi,banana,orange],function(err){
//     if(err){
//         console.log(err);

//     }
//     else{
//         console.log("The three fruits have been inserted to the Fruits");
//     }
// });
Fruit.deleteOne({_id:"62b281cf1937489338c1435f"},function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log("Succesfully delete the element!");
    }
});
// Person.deleteMany({name:"John"},function(err){
//         if(err){
//             console.log(err);
//         }    
//         else{
//             console.log("Successfully delete all johns");
//         }
// });

Fruit.find(function(err,fruits){
    if(err){
        console.log(err);

    }
    else{
        mongoose.connection.close();
        fruits.forEach(function(fruit){
            console.log(fruit.name);
        })
    }
    
});









