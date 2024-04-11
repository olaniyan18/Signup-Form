




function validate(){
  var  firstname = document.getElementById("firstname").value;
  var  lastname = document.getElementById("lastname").value;
  var  emailaddress = document.getElementById("emailaddress").value;
  var  password = document.getElementById("password").value;
  var status = false;
  var svg = document.getElementById("svg");

  if (firstname.length < 1){
    
    document.querySelector('.error-message').innerHTML = "First Name cannot be empty"; status = false;
    document.getElementById("svg").style.visibility = 'visible';
    document.getElementById("firstname").style.border = "3px solid";
    document.getElementById("firstname").style.borderColor = "hsl(0, 100%, 74%)";
    
  }else {
    document.querySelector('.error-message').innerHTML = "";
    status = true;
  }

  if (lastname.length < 1){
    document.querySelector('.error-message1').innerHTML = "Last Name cannot be empty";
    document.getElementById("svg1").style.visibility = 'visible';
    document.getElementById("lastname").style.border = "3px solid";
    document.getElementById("lastname").style.borderColor = "hsl(0, 100%, 74%)"
    status = false;

  }else {
    document.querySelector('.error-message1').innerHTML = "";
    status = true; 
  }

  if (emailaddress === ""){
    document.querySelector('.error-message2').innerHTML = "Email Address cannot be empty";
    document.getElementById("svg2").style.visibility = 'visible';
    document.getElementById("emailaddress").style.border = "3px solid";
    document.getElementById("emailaddress").style.borderColor = "hsl(0, 100%, 74%)";
    status = false;

  } else{
    document.querySelector('.error-message2').innerHTML = "";
    status = true;
  }

  if (password === "") {
    document.querySelector('.error-message3').innerHTML = "Password cannot be empty";
    document.getElementById("svg3").style.visibility = 'visible';
    document.getElementById("password").style.border = "3px solid";
    document.getElementById("password").style.borderColor = "hsl(0, 100%, 74%)";
    status = false
  }else {
    document.querySelector('.error-message3').innerHTML = ""; 
  }
  return status;
}




