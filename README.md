# twilioElektron
This is an example of how to control an Elektron Octatrack, via midi (easymidi), with Twilio SMS and Node.js + Express. The purpose of this project was to make an initial connection with the Elektron Octatrak by using text message to mute and unmute a single track on the sampler using MIDI. This idea could be grown into a larger system that could utilize complex MIDI routes to create algorithmic compositions using data, a crowd of text messages or even gorillas in the wild. Think big.

# What was used
[Node.js](https://nodejs.org/en/) - [Express](https://expressjs.com/en/starter/installing.html) - [Twilio](https://www.twilio.com/sms) - [easymidi](https://github.com/dinchak/node-easymidi)

# How to use?

1) Install the necessary dependencies

`npm i`

2) Start the app [* insert a port number at the end, can be anything, just make sure it's the same as ngrok]

`npm run 7777`

3) Start ngrok

`ngrok http 7777`

4) Copy the "Forwarding" address, go to your Twilio account and navigate to your available phonenumbers

5) Click the phone number you would like to use and navigate to the "Messaging" section.

6) Paste the "Forwarding" address into where it say "A Message Comes In", make sure it's set to Webhook and HTTP POST

7) Once you paste the address, add "/sms" at the end so it is properly routed to the Express API

`http://bcbdd8a8.ngrok.io/sms`

8) Send an "On" text! It should turn on the first track of the Octatrack and "Off" mutes the track. 
[There was no preconditioning done with the Octatrack, literally plug and play with a USB MIDI device]

`npm run deploy`

# Video

[![twilioElektron](https://img.youtube.com/vi/KFZJt0G3Mag/0.jpg)](https://youtu.be/KFZJt0G3Mag "twilioElektron")

