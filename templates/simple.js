var Message = require('../message')
var Attachment = require('../attachment')

var attachment = new Attachment()
attachment
    .setColor('#A0CA3C')
    .setText(`Something Happened! You may have forgotten to specify a message template`)

var message = new Message()
message.addAttachment(attachment.getAttachment)

module.exports = message.getMessage