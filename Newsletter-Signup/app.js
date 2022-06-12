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
        apiKey: "",
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
        // console.log(response);
        if (response.error_count !== 0) {
            res.sendFile(__dirname + "/success.html");
        } else {
            res.sendFile(__dirname + "/failure.html");
        }
    };

    run();

    /*const jsonData = JSON.stringify(data);
    const options = {
        method: "POST",
        auth: ""

    }
    const request = https.request(url, options, function(respons) {
        respons.on("data", function(da) {

            console.log(JSON.parse(da));
        });

    });
    request.write(jsonData);
    request.end;*/
});
app.get("success.html", function(res, req) {
    req.sendFile(__dirname + "/signup.html");
})

app.listen(process.env.PORT || 3000, function() {
    console.log("The Server is running on port 3000");
})








//Audience ID:321e1e4555
//API Key