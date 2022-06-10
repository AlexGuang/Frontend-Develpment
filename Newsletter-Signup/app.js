const express = require("express");
const bodyParser = require("body-parser");
//const request = require("request");
const https = require("https");
const client = require('@mailchimp/mailchimp_marketing');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function(req, res) {

    res.sendFile(__dirname + "/signup.html");
})

app.post("/", function(req, res) {

    const firstName = req.body.firstName;
    const secondName = req.body.secondName;
    const emailAdd = req.body.emailAdd;

    const url = "https://us11.api.mailchimp.com/3.0/lists/321e1e4555"
    console.log(url);
    console.log(firstName);
    console.log(secondName);
    console.log(emailAdd);
    var data = {
        members: [{
            email_address: emailAdd,
            status: "subscribed",
            merge_fields: {
                FNAME: firstName,
                LNAME: secondName

            }
        }]
    };

    client.setConfig({
        apiKey: "89143ad6f48cfa20268cf8a3e3695639-us11",
        server: "us11",
    });

    const run = async() => {
        const response = await client.lists.batchListMembers("321e1e4555", {
            members: [{
                email_address: emailAdd,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: secondName

                }
            }],
        });
        console.log(response);
        if (response.error_count !== 0) {
            res.send("<h1>有错误，请重新输入</h1>");
        } else {
            res.send("<h1>输入成功</h1>");
        }
    };

    run();

    /*const jsonData = JSON.stringify(data);
    const options = {
        method: "POST",
        auth: "alex1:89143ad6f48cfa20268cf8a3e3695639-us11"

    }
    const request = https.request(url, options, function(respons) {
        respons.on("data", function(da) {

            console.log(JSON.parse(da));
        });

    });
    request.write(jsonData);
    request.end;*/
});


app.listen(3000, function() {
    console.log("The Server is running on port 3000");
})








//Audience ID:321e1e4555
//API Key 89143ad6f48cfa20268cf8a3e3695639-us11