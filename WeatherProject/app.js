const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", function(req, res) {

    res.sendFile(__dirname + "/index.html");
});


app.post("/", function(request, response) {
    const cityName = request.body.cityName;
    const someId = "172747710e80a10c8894d321db5f8180";
    const urlBase = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
    const urlCompleted = urlBase + cityName + "&appid=" + someId;
    https.get(urlCompleted, function(res) {
        res.on("data", function(data) {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const imageRL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            response.write("<h1>The city of " + weatherData.name + " is " + temp + " degree and its now " + weatherDescription + "</h1>");
            response.write("<img src =" + imageRL + ">");
            response.send();
        })
    })

    //res.send("The city of " + weatherData.name + " is " + temp + " degree and its now " + weatherDescription);
})

/*{
    //res.send("Server is up and running");
    var urlApi = "https://api.openweathermap.org/data/2.5/weather?q=Beijing&appid=172747710e80a10c8894d321db5f8180&units=metric";

    https.get(urlApi, function(response) {
        //console.log(response.statusCode);

        response.on("data", function(data) {
            //console.log(data);
            var weatherData = JSON.parse(data);
            //console.log(weatherData);
            var temp = weatherData.main.temp;
            var weatherDescription = weatherData.weather[0].description;
            //console.log(temp);
            //console.log(weatherDescription);
            var icon = weatherData.weather[0].icon;
            var imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
            console.log(imageURL);
            res.write("<h1>The city of " + weatherData.name + " is " + temp + " degree and its now " + weatherDescription + "</h1>");
            res.write("<img src =" + imageURL + ">");
            //res.send("The city of " + weatherData.name + " is " + temp + " degree and its now " + weatherDescription);
            res.send();
            //  app.send
        })
    })

}*/







app.listen(3000, function() {
    console.log("Server is running on port 3000");
});