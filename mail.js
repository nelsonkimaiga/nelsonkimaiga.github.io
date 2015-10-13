/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Using DOM to extract contact form input
//Calling a function we created called checkForm()
function checkForm() {
 name = document.getElementById("name").value;
 email = document.getElementById("email").value;
 subject =document.getElementById("subject").value;
  message=document.getElementById("message").value;

 //using 'if-else' statement to check for conditions...
 if (name == "")
 {
 hideAllErrors();
 document.getElementById("nameError").style.display = "inline";
 document.getElementById("name").select();
 document.getElementById("name").focus();
 return false;
 }
 else if (email == "")
 {
 hideAllErrors();
 document.getElementById("emailError").style.display = "inline";
 document.getElementById("email").select();
 document.getElementById("email").focus();
 return false;
 }

  else if (subject == "")
 {
 hideAllErrors();
 document.getElementById("subjectError").style.display = "inline";
 document.getElementById("email").select();
 document.getElementById("email").focus();
 return false;
 }
 else if (message == "")
 {
 hideAllErrors();
 document.getElementById("messageError").style.display = "inline";
 document.getElementById("message").select();
 document.getElementById("message").focus();
 return false;
 }

 //fucntion that checks for invalid email addresses and returns an error message
 if (!checkEmail(email))
 {
 alert('Email address is invalid');
 return false;
 }
 return true;
}

function hideAllErrors() {
 document.getElementById("nameError").style.display = "none";
 document.getElementById("emailError").style.display = "none";
 document.getElementById("messageError").style.display = "none";
}

function checkEmail(inputvalue) {
 var pattern = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
 return pattern.test(inputvalue);
}
