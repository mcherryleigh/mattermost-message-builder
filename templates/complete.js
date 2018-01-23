var Message = require('../message')
var Attachment = require('../attachment')

var attachment = new Attachment()
attachment
    .setFallback('Awesome Attachment Fallback')
    .setPretext('Awesome Attachment Pretext')
    .setText('Awesome Attachment Text')
    .setColor('#A0CA3C')
    .setAuthorName('Awesome Attachment User')
    .setAuthorIcon('http://lorempixel.com/400/200/sports/1')
    .setAuthorLink('https://example.com')
    .setTitle('Awesome Attachment Title')
    .setTitleLink('https://example.com')
    .setImageUrl('http://lorempixel.com/400/200/sports/2')
    .setThumbUrl('http://lorempixel.com/400/200/sports/3')
    .addField({
        "short":true,
        "title":"Awesome Attachment Field",
        "value":"Testing"
    })
    .addField({
        "short":true,
        "title":"Another Awesome Attachment Field",
        "value":"Testing"
    })
    .addField({
        "short":false,
        "title":"A Long Awesome Attachment Field",
        "value":"Testing"
    })
    .addAction({
        "name": "Awesome Attachment Button #1",
        "integration": {
            "url": "http://127.0.0.1",
            "context": {
                "action": "do_something_ephemeral"
            }
        }
    })
    .addAction({
        "name": "Awesome Attachment Button #2",
        "integration": {
            "url": "http://127.0.0.1",
            "context": {
                "action": "do_something_update"
            }
        }
    })

var message = new Message()
message
    .setText('Awesome Message Text')
    //.setUsername('AwesomeUser')
    //.setChannel('AwesomeChannel')
    .setIconUrl('http://lorempixel.com/400/200/sports/4')
    .addAttachment(attachment.getAttachment)

module.exports = message.getMessage