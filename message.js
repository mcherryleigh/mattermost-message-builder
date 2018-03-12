const _ = require("lodash");
/** Class representing a Mattermost message attachment. */
class Message {
  /**
   * Create an attachment object for a mattermost integration message response.
   */
  constructor() {
    this.result = {};
  }

  /**
   * Get the message attachment object and return it
   * @return {object} The object representing the message that was configured
   */
  get getMessage() {
    return this.result;
  }

  /**
   * A required plain-text summary of the post. This is used in notifications, and in clients that don’t support formatted text.
   * @param {string} str - The value of the fallback text string.
   */
  setText(str) {
    if (_.isString(str)) {
      this.result.text = str;
      return this;
    } else {
      var err = `Message text has value of ${str} but is expected to be a string`;
      throw err;
    }
  }

  /**
   * An optional line of text that will be shown above the attachment.
   * @param {string} str - The value of the pretext text string.
   */
  setChannel(str) {
    if (_.isString(str)) {
      this.result.channel = str;
      return this;
    } else {
      var err = `Message channel has value of ${str} but is expected to be a string`;
      throw err;
    }
  }

  /**
   *  The text to be included in the attachment. It can be formatted using Markdown. If it includes more than 300 characters or more than 5 line breaks, the message will be collapsed and a “Show More” link will be added to expand the message.
   * @param {string} str - The value of the attachment text string.
   */
  setUsername(str) {
    if (_.isString(str)) {
      this.result.username = str;
      return this;
    } else {
      var err = `Message username has value of ${str} but is expected to be a string`;
      throw err;
    }
  }

  /**
   * A hex color code that will be used as the left border color for the attachment. If not specified, it will default to match the left hand sidebar header background color.
   * @param {string} str - The value of the color hex string.
   */
  setIconUrl(str) {
    if (_.isString(str)) {
      this.result.icon_url = str;
      return this;
    } else {
      var err = `Message icon_url has value of ${str} but is expected to be a string`;
      throw err;
    }
  }

  /**
   * Messages can include an optional array of attachments. You may enter json or user the included Attachment class
   * @param {object} object - The value of the field object.
   */
  addAttachment(obj) {
    if (
      !this.result.hasOwnProperty("attachments") ||
      this.result.attachments.length <= 0
    )
      this.result.attachments = [];
    this.result.attachments.push(obj);
    return this;
  }
}

module.exports = Message;
