import test from "ava";

var Attachment = require("../attachment");

test("can set the attachment fallback", (t) => {
  var comparisonObj = {};
  comparisonObj.fallback = "Awesome Fallback";

  var attachment = new Attachment();
  attachment.setFallback("Awesome Fallback");

  t.deepEqual(comparisonObj, attachment.getAttachment);
});

test("attachment fallback must be string", (t) => {
  try {
    var attachment = new Attachment();
    attachment.setFallback(3);
  } catch (err) {
    t.is(
      err,
      "Attachment fallback has value of 3 but is expected to be a string"
    );
  }
});

test("can set the attachment pretext", (t) => {
  var comparisonObj = {};
  comparisonObj.pretext = "Awesome Pretext";

  var attachment = new Attachment();
  attachment.setPretext("Awesome Pretext");

  t.deepEqual(comparisonObj, attachment.getAttachment);
});

test("attachment pretext must be string", (t) => {
  try {
    var attachment = new Attachment();
    attachment.setPretext(3);
  } catch (err) {
    t.is(
      err,
      "Attachment pretext has value of 3 but is expected to be a string"
    );
  }
});

test("can set the attachment text", (t) => {
  var comparisonObj = {};
  comparisonObj.text = "Awesome Text";

  var attachment = new Attachment();
  attachment.setText("Awesome Text");

  t.deepEqual(comparisonObj, attachment.getAttachment);
});

test("attachment text must be string", (t) => {
  try {
    var attachment = new Attachment();
    attachment.setText(3);
  } catch (err) {
    t.is(err, "Attachment text has value of 3 but is expected to be a string");
  }
});

test("can set the attachment color", (t) => {
  var comparisonObj = {};
  comparisonObj.color = "#000000";

  var attachment = new Attachment();
  attachment.setColor("#000000");

  t.deepEqual(comparisonObj, attachment.getAttachment);
});

test("attachment text must be string", (t) => {
  try {
    var attachment = new Attachment();
    attachment.setColor(3);
  } catch (err) {
    t.is(err, "Attachment color has value of 3 but is expected to be a string");
  }
});

test("can set the attachment author_name", (t) => {
  var comparisonObj = {};
  comparisonObj.author_name = "Awesome Author";

  var attachment = new Attachment();
  attachment.setAuthorName("Awesome Author");

  t.deepEqual(comparisonObj, attachment.getAttachment);
});

test("attachment author_name must be string", (t) => {
  try {
    var attachment = new Attachment();
    attachment.setAuthorName(3);
  } catch (err) {
    t.is(
      err,
      "Attachment author_name has value of 3 but is expected to be a string"
    );
  }
});

test("can set the attachment author_icon", (t) => {
  var comparisonObj = {};
  comparisonObj.author_icon = "http://example.com/awesomeimage.jpg";

  var attachment = new Attachment();
  attachment.setAuthorIcon("http://example.com/awesomeimage.jpg");

  t.deepEqual(comparisonObj, attachment.getAttachment);
});

test("attachment author_icon must be string", (t) => {
  try {
    var attachment = new Attachment();
    attachment.setAuthorIcon(3);
  } catch (err) {
    t.is(
      err,
      "Attachment author_icon has value of 3 but is expected to be a string"
    );
  }
});

test("can set the attachment author_link", (t) => {
  var comparisonObj = {};
  comparisonObj.author_link = "http://example.com/";

  var attachment = new Attachment();
  attachment.setAuthorLink("http://example.com/");

  t.deepEqual(comparisonObj, attachment.getAttachment);
});

test("attachment author_link must be string", (t) => {
  try {
    var attachment = new Attachment();
    attachment.setAuthorLink(3);
  } catch (err) {
    t.is(
      err,
      "Attachment author_link has value of 3 but is expected to be a string"
    );
  }
});

test("can set the attachment title", (t) => {
  var comparisonObj = {};
  comparisonObj.title = "Awesome Title";

  var attachment = new Attachment();
  attachment.setTitle("Awesome Title");

  t.deepEqual(comparisonObj, attachment.getAttachment);
});

test("attachment title must be string", (t) => {
  try {
    var attachment = new Attachment();
    attachment.setTitle(3);
  } catch (err) {
    t.is(err, "Attachment title has value of 3 but is expected to be a string");
  }
});

test("can set the attachment title_link", (t) => {
  var comparisonObj = {};
  comparisonObj.title_link = "http://example.com/";

  var attachment = new Attachment();
  attachment.setTitleLink("http://example.com/");

  t.deepEqual(comparisonObj, attachment.getAttachment);
});

test("attachment title_link must be string", (t) => {
  try {
    var attachment = new Attachment();
    attachment.setTitleLink(3);
  } catch (err) {
    t.is(
      err,
      "Attachment title_link has value of 3 but is expected to be a string"
    );
  }
});

test("can set the attachment image_url", (t) => {
  var comparisonObj = {};
  comparisonObj.image_url = "http://example.com/";

  var attachment = new Attachment();
  attachment.setImageUrl("http://example.com/");

  t.deepEqual(comparisonObj, attachment.getAttachment);
});

test("attachment image_url must be string", (t) => {
  try {
    var attachment = new Attachment();
    attachment.setImageUrl(3);
  } catch (err) {
    t.is(
      err,
      "Attachment image_url has value of 3 but is expected to be a string"
    );
  }
});

test("can set the attachment thumb_url", (t) => {
  var comparisonObj = {};
  comparisonObj.thumb_url = "http://example.com/";

  var attachment = new Attachment();
  attachment.setThumbUrl("http://example.com/");

  t.deepEqual(comparisonObj, attachment.getAttachment);
});

test("attachment thumb_url must be string", (t) => {
  try {
    var attachment = new Attachment();
    attachment.setThumbUrl(3);
  } catch (err) {
    t.is(
      err,
      "Attachment thumb_url has value of 3 but is expected to be a string"
    );
  }
});

test("attachment can have multiple fields", (t) => {
  var comparisonObj = {};
  comparisonObj.fields = [];
  comparisonObj.fields[0] = {
    short: false,
    title: "Another Field",
    value: "Testing"
  };
  comparisonObj.fields[1] = {
    short: true,
    title: "Column Two",
    value: "Testing"
  };
  var attachment = new Attachment();
  attachment
    .addField({
      short: false,
      title: "Another Field",
      value: "Testing"
    })
    .addField({
      short: true,
      title: "Column Two",
      value: "Testing"
    });
  t.deepEqual(comparisonObj, attachment.getAttachment);
});

test("attachment can have multiple actions", (t) => {
  var comparisonObj = {};
  comparisonObj.actions = [];
  comparisonObj.actions[0] = {
    name: "Ephemeral Message",
    integration: {
      url: "http://127.0.0.1:7357",
      context: {
        action: "do_something_ephemeral"
      }
    }
  };
  comparisonObj.actions[1] = {
    name: "Update",
    integration: {
      url: "http://127.0.0.1:7357",
      context: {
        action: "do_something_update"
      }
    }
  };
  var attachment = new Attachment();
  attachment
    .addAction({
      name: "Ephemeral Message",
      integration: {
        url: "http://127.0.0.1:7357",
        context: {
          action: "do_something_ephemeral"
        }
      }
    })
    .addAction({
      name: "Update",
      integration: {
        url: "http://127.0.0.1:7357",
        context: {
          action: "do_something_update"
        }
      }
    });
  t.deepEqual(comparisonObj, attachment.getAttachment);
});
