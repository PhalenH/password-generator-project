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


// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// var prompts = ["uppercase", "lowercase", "numeric", "special characters"];
// for (var i=0; i < prompts.length, i++) {
//  console.log(`this prompt includes ${prompt[i]} in your password');


// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// 


// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// if length of password is >=8 and <=128
// the password is valid
// else
// the password in invalid

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
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