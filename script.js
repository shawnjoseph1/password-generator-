function generatePassword() {
    
  var password = "";
  var special = "!@#$%^&*()_+-=";
  var numbers = "0123456789";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var all = ""
  var characters = prompt("Which characters would you like your password to include?\n 1 = Letters only (A-Z) \n 2 = Letters and numbers (A-Z+1-0) \n 3 = Letters, numbers, and special characters (A-Z+1-0+@#!$)");
  var sub = 0

  
  if (characters == "1") {
      all = lowercase + uppercase
      password += lowercase[Math.floor(Math.random() * lowercase.length)]
      password += uppercase[Math.floor(Math.random() * uppercase.length)]
      sub = 2
      
      // block of code to be executed if condition1 is true
    } else if (characters == "2") {

      all = lowercase + uppercase + numbers
      password += lowercase[Math.floor(Math.random() * lowercase.length)]
      password += uppercase[Math.floor(Math.random() * uppercase.length)]
      password += numbers[Math.floor(Math.random() * numbers.length)]
      sub = 3
      // block of code to be executed if the condition1 is false and condition2 is true
    } else if (characters == "3") {
      all = lowercase + uppercase + numbers + special
      password += lowercase[Math.floor(Math.random() * lowercase.length)]
      password += uppercase[Math.floor(Math.random() * uppercase.length)]
      password += numbers[Math.floor(Math.random() * numbers.length)]
      password += special[Math.floor(Math.random() * special.length)]
      sub = 4
      // block of code to be executed if the condition1 is false and condition2 is false
    } else if (parseInt(characters) < 1|| parseInt(characters) > 3){
      alert("Make sure to write a number from 1 to 3")
      generatePassword()

    }
  
  let passwordLength = prompt("How many characters would you like? Choose a number between 8 and 128.");
  if (parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128){
    alert("Make sure to write a number from 8 to 128")
    generatePassword()


  }
  for (var i = 0; i < parseInt(passwordLength) - sub; i++) {
    password += all.charAt(Math.floor(Math.random() * all.length));
    //console.log(password)
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