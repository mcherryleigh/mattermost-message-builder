const _ = require('lodash')
/** Class representing a Mattermost message attachment. */
class Attachment {
    /**
     * Create an attachment object for a mattermost integration message response.
     */
    constructor (){
        this.result = {}
    }

    /**
     * Get the message attachment object and return it
     * @return {object} The object representing the message that was configured
     */
    get getAttachment(){
        return this.result
    }

    /**
     * A required plain-text summary of the post. This is used in notifications, and in clients that don’t support formatted text.
     * @param {string} str - The value of the fallback text string.
     */
    setFallback(str){
        if(_.isString(str)){
            this.result.fallback = str
            return this
        } else {
            var err = `Attachment fallback has value of ${str} but is expected to be a string`
            throw err
        }
    }

    /**
     * An optional line of text that will be shown above the attachment.
     * @param {string} str - The value of the pretext text string.
     */
    setPretext(str){
        if(_.isString(str)){
            this.result.pretext = str
            return this
        } else {
            var err = `Attachment pretext has value of ${str} but is expected to be a string`
            throw err
        }
    }

    /**
     *  The text to be included in the attachment. It can be formatted using Markdown. If it includes more than 300 characters or more than 5 line breaks, the message will be collapsed and a “Show More” link will be added to expand the message.
     * @param {string} str - The value of the attachment text string.
     */
    setText(str){
        if(_.isString(str)){
            this.result.text = str
            return this
        } else {
            var err = `Attachment text has value of ${str} but is expected to be a string`
            throw err
        }
    }

    /**
     * A hex color code that will be used as the left border color for the attachment. If not specified, it will default to match the left hand sidebar header background color.
     * @param {string} str - The value of the color hex string.
     */
    setColor(str){
        if(_.isString(str)){
            this.result.color = str
            return this
        } else {
            var err = `Attachment color has value of ${str} but is expected to be a string`
            throw err
        }
    }

    /**
     * An optional name used to identify the author. It will be included in a small section at the top of the attachment.
     * @param {string} str - The value of the author name text string.
     */
    setAuthorName(str){
        if(_.isString(str)){
            this.result.author_name = str
            return this
        } else {
            var err = `Attachment author_name has value of ${str} but is expected to be a string`
            throw err
        }
    }

    /**
     * An optional URL used to display a 16x16 pixel icon beside the author_name.
     * @param {string} str - The value of the author icon image's url string.
     */
    setAuthorIcon(str){
        if(_.isString(str)){
            this.result.author_icon = str
            return this
        } else {
            var err = `Attachment author_icon has value of ${str} but is expected to be a string`
            throw err
        }
    }

    /**
     * An optional URL used to hyperlink the author_name. If no author_name is specified, this field does nothing.
     * @param {string} str - The value of the author link url string.
     */
    setAuthorLink(str){
        if(_.isString(str)){
            this.result.author_link = str
            return this
        } else {
            var err = `Attachment author_link has value of ${str} but is expected to be a string`
            throw err
        }
    }

    /**
     * An optional title displayed below the author information in the attachment.
     * @param {string} str - The value of the title string.
     */
    setTitle(str){
        if(_.isString(str)){
            this.result.title = str
            return this
        } else {
            var err = `Attachment title has value of ${str} but is expected to be a string`
            throw err
        }
    }

    /**
     * An optional URL used to hyperlink the title. If no title is specified, this field does nothing.
     * @param {string} str - The value of the title link url string.
     */
    setTitleLink(str){
        if(_.isString(str)){
            this.result.title_link = str
            return this
        } else {
            var err = `Attachment title_link has value of ${str} but is expected to be a string`
            throw err
        }
    }

    /**
     * An optional URL to an image file (GIF, JPEG, PNG, BMP, or SVG) that is displayed inside a message attachment. Large images are resized to a maximum width of 400px or a maximum height of 300px, while still maintaining the original aspect ratio.
     * @param {string} str - The value of the image url string.
     */
    setImageUrl(str){
        if(_.isString(str)){
            this.result.image_url = str
            return this
        } else {
            var err = `Attachment image_url has value of ${str} but is expected to be a string`
            throw err
        }
    }

    /**
     * An optional URL to an image file (GIF, JPEG, PNG, BMP, or SVG) that is displayed as a 75x75 pixel thumbnail on the right side of an attachment. We recommend using an image that is already 75x75 pixels, but larger images will be scaled down with the aspect ratio maintained.
     * @param {string} str - The value of the thumbnail image url string.
     */
    setThumbUrl(str){
        if(_.isString(str)){
            this.result.thumb_url = str
            return this
        } else {
            var err = `Attachment thumb_url has value of ${str} but is expected to be a string`
            throw err
        }
    }

    /**
     * Fields can be included as an optional array within attachments, and are used to display information in a table format inside the attachment.
     * title: A title shown in the table above the value.
     * value: The text value of the field. It can be formatted using Markdown.
     * short: Optionally set to “True” or “False” to indicate whether the value is short enough to be displayed beside other values.
     * @param {object} object - The value of the field object.
     */
    addField(obj){
        if(!this.result.hasOwnProperty('fields') || this.result.fields.length <= 0) this.result.fields = []
        this.result.fields.push(obj)
        return this
    }

    addAction(obj){
        if(!this.result.hasOwnProperty('actions') || this.result.actions.length <= 0) this.result.actions = []
        this.result.actions.push(obj)
        return this
    }
}

module.exports = Attachment