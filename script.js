function generatePassword() {
    
  var password = "";
  var special = "!@#$%^&*()_+-=";
  var numbers = "0123456789";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var all = ""
  var characters = prompt("Which characters would you like your password to include?\n Type in the number 1 for letters only (A-Z)\n Type in the number 2 for letters and numbers only (A-Z+1-0) \n Type in the number 3 for letters, numbers, and special characters (A-Z + 1-0 + @#=!+)");
  var sub = 0

  
  switch (characters) {
    case "1":
      all = lowercase + uppercase;
      sub = 1;
      break;
    case "2":
      all = lowercase + uppercase + numbers;
      sub = 2;
      break;
    case "3":
      all = lowercase + uppercase + numbers + special;
      sub = 3;
      break;
      default:
      alert("Make sure to write a number from 1 to 3");
      break;
  }

  var length = prompt("How many characters would you like your password to be? choose a number between 8 and 128");
  if (length < 8 || length > 128) {
    alert("Make sure to write a number from 8 to 128");
  } else {
    for (var i = 0; i < length; i++) {
      password += all.charAt(Math.floor(Math.random() * all.length));
    }
  }
  return password;
}

var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);



