const express = require("express");
const https = require("https");

const app = express();


app.get("/", function(req, res) {
    //res.send("Server is up and running");
    var urlApi = "https://api.openweathermap.org/data/2.5/weather?q=Hobart&appid=172747710e80a10c8894d321db5f8180&units=metric";

    https.get(urlApi, function(response) {
        console.log(response.statusCode);

        response.on("data", function(data) {
            //console.log(data);
            var weatherData = JSON.parse(data);
            var temp = weatherData.main.temp;
            var weatherDescription = weatherData.weather[0].description;
            console.log(temp);
            console.log(weatherDescription);
        })
    })
});









app.listen(3000, function() {
    console.log("Server is running on port 3000");
});