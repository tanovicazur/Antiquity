function jen(){
    error_message.style.padding = "10px";
    document.getElementById("error_message").innerHTML = "Please enter your data:";
}

function valid(){

  var ime = document.getElementById("ime").value;
  var email = document.getElementById("email").value;
  var broj = document.getElementById("broj").value;
  var poruka = document.getElementById("poruka").value;
  var error_message = document.getElementById("error_message");
  var text;

  error_message.style.padding = "10px";

  if (ime.indexOf(" ") == -1 || ime.length<5){
    text = "Please enter a valid full name!";
    error_message.innerHTML = text;
    document.getElementById("ime").focus();
    return false;
  }

  if (email.indexOf(".") == -1 || email.indexOf("@") == -1 || email.length<6){
    text = "Please enter a valid email adress!";
    error_message.innerHTML = text;
    document.getElementById("email").focus();
    return false;
  }

  if (broj.length<6){
    text = "Please enter a valid phone number!";
    error_message.innerHTML = text;
    document.getElementById("broj").focus();
    return false;
  }

  if (poruka.length<10){
    text = "Your message has to be longer (at least 10 characters).";
    error_message.innerHTML = text;
    document.getElementById("poruka").focus();
    return false;
  }

  alert("Your message has been sent to us!");
  return true;

}
