import test from "ava";
import Message from "../message";
import Attachment from "../attachment";

test("can set the message text", t => {
  var comparisonObj = {};
  comparisonObj.text = "Awesome Text";

  var message = new Message();
  message.setText("Awesome Text");

  t.deepEqual(comparisonObj, message.getMessage);
});

test("message text must be string", t => {
  var comparisonObj = {};
  try {
    var message = new Message();
    message.setText(3);
  } catch (err) {
    t.is(err, "Message text has value of 3 but is expected to be a string");
  }
});

test("can set the message channel", t => {
  var comparisonObj = {};
  comparisonObj.channel = "AwesomeChannel";

  var message = new Message();
  message.setChannel("AwesomeChannel");

  t.deepEqual(comparisonObj, message.getMessage);
});

test("message channel must be string", t => {
  var comparisonObj = {};
  try {
    var message = new Message();
    message.setChannel(3);
  } catch (err) {
    t.is(err, "Message channel has value of 3 but is expected to be a string");
  }
});

test("can set the message username", t => {
  var comparisonObj = {};
  comparisonObj.channel = "AwesomeUser";

  var message = new Message();
  message.setChannel("AwesomeUser");

  t.deepEqual(comparisonObj, message.getMessage);
});

test("message username must be string", t => {
  var comparisonObj = {};
  try {
    var message = new Message();
    message.setUsername(3);
  } catch (err) {
    t.is(err, "Message username has value of 3 but is expected to be a string");
  }
});

test("can set the message icon_url", t => {
  var comparisonObj = {};
  comparisonObj.icon_url = "http://example.com/awesomeimage.jpg";

  var message = new Message();
  message.setIconUrl("http://example.com/awesomeimage.jpg");

  t.deepEqual(comparisonObj, message.getMessage);
});

test("message icon_url must be string", t => {
  var comparisonObj = {};
  try {
    var message = new Message();
    message.setIconUrl(3);
  } catch (err) {
    t.is(err, "Message icon_url has value of 3 but is expected to be a string");
  }
});

test("message can have multiple attachments", t => {
  var comparisonObj = {};
  comparisonObj.attachments = [];
  comparisonObj.attachments[0] = { text: "A1" };
  comparisonObj.attachments[1] = { text: "A2" };

  var attachment1 = new Attachment();
  attachment1.setText("A1");

  var attachment2 = new Attachment();
  attachment2.setText("A2");

  var message = new Message();
  message
    .addAttachment(attachment1.getAttachment)
    .addAttachment(attachment2.getAttachment);

  t.deepEqual(message.getMessage, comparisonObj);
});

test("complete message turns out as expected", t => {
  var comparisonObj = {};
  comparisonObj.attachments = [];
  comparisonObj.text = "Awesome Text";
  comparisonObj.username = "AwesomeUser";
  comparisonObj.channel = "AwesomeChannel";
  comparisonObj.icon_url = "http://example.com/awesomeimage.jpg";
  comparisonObj.attachments[0] = { text: "A1" };
  comparisonObj.attachments[1] = { text: "A2" };

  var attachment1 = new Attachment();
  attachment1.setText("A1");

  var attachment2 = new Attachment();
  attachment2.setText("A2");

  var message = new Message();
  message
    .setText("Awesome Text")
    .setUsername("AwesomeUser")
    .setChannel("AwesomeChannel")
    .setIconUrl("http://example.com/awesomeimage.jpg")
    .addAttachment(attachment1.getAttachment)
    .addAttachment(attachment2.getAttachment);

  t.deepEqual(message.getMessage, comparisonObj);
});
