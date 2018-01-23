var request = require('request-promise')
var path = require("path");

var argv = require('yargs')
    .option('hook', {
        alias: 'h',
        default: process.env.hasOwnProperty('MATTERMOST_HOOK') ? process.env.MATTERMOST_HOOK : null
    })
    .option('template', {
        alias: 't',
        default: 'templates/simple.js'
    })
    .option('channel', {
        alias: 'c',
        default: 'chatbot testing'
    })
    .demandOption(['template', 'hook'], 'Please provide both template and hook url arguments to send a message')
    .argv

var sendMessage = async function() {
    try{
        if(argv.hook == null){
            console.log('You must specify a MATTERMOST_HOOK environmental variable or use the --hook argument')
        } else {
            console.log(`Sending file: ${argv.t} to hook: ${argv.hook}`)
            var options = {
                method: 'POST',
                uri: argv.h,
                body: require(path.resolve(argv.t)),
                json: true,
                rejectUnauthorized: false,
            };
        }
        var messageResponse = await request(options);
        console.log('Message was sent successfully')
    } catch(err) {
        console.log(`There was a problem sending your message:\n${err}`)
    }
}

sendMessage()