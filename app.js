// __________________________________________
// Server Setup
var express 	= require("express");
var app 		= express();
var bodyParser 	= require("body-parser");
var port 		= process.argv[2];

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    
    app.listen(port);

// __________________________________________
// MIDI Library
var easymidi 	= require('easymidi');

// look for MIDI devices
// var outputs = easymidi.getOutputs();

// Set MIDI output device
var output 		= new easymidi.Output('USB2.0-MIDI Port 1');

// __________________________________________
// Receive SMS from Twilio to control Elektron Octatrack MIDI
app.post('/sms', (request, response) => {
    console.log("response : ", response.req.body.Body)
    if (response.req.body.Body == "Off") {
        console.log("Mute Elektron Octatrack Ch.1");
        output.send('cc', {
            controller: 7,
            value: 0,
            channel: 0
        })
    } else if (response.req.body.Body == "On") {
        console.log("Listen to Elektron Octatrack Ch.1");
        output.send('cc', {
            controller: 7,
            value: 127,
            channel: 0
        })
    }
});

console.log('Magic happens on port ' + port);