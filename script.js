// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// ^^^ acceptance criteria will have code in it
// GIVEN I need a new, secure password
var max = 10
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
var capLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
var numbers = Math.floor(Math.random() * max)
//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9] -- do i need this if the math.floor works?
var unique = ["!", "@", "#", "$", "%", ">", "<", "&", "~", "+", "-"]

function generatePassword() {
  var passwordLength = prompt("Choose a number between 8 and 128 to determine length of your password.");

  if (passwordLength >= 8 && passwordLength <= 128){
    alert("valid");
  }
  else {
    alert("Invalid: please enter a number between 8 to 128.");
    return "Try again"; 
  }//--how do I add more prompts but also stop it here if they don't enter a valid response?

  var upperCase =confirm("Do you want uppercase letters to be included?")

  var numbers = confirm("Do you want numbers to be included?")

  var special = confirm("Do you want special characters to be included?")

}
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria


// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN asked for character types to include in the password
// THEN I CONFIRM whether or not to include lowercase, uppercase, numeric, and/or special characters
// var lowercase = true/false
//  var uppercase = true/false
//  var numeric = true/false
//  var special = true/false


// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected


// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria


// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// alert("Password is: ...") anthony said prefers it's written to page
// ```


// max = var.length;
// conesole.log(var[Math.floor(Math.random() * max)]);