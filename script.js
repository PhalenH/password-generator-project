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


function generatePassword() {
  var passwordLength = prompt("Choose a number between 8 and 128 to determine length of your password.");
  const letters = "abcdefghijklmnopqrstuvwxyz";
  const capital = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const unique = "!@#$%^&*~+-()";
  let passwordCharacters = "";
  let finalPassword = "";
  

  if (passwordLength >= 8 && passwordLength <= 128){
  }
  else {
    alert("Invalid: please enter a number between 8 to 128.");
    return "Try again"; 
  }

  var lowerCase = confirm("Do you want lowercase letters to be included?")
  if(lowerCase){
    passwordCharacters += letters;
    // += is the same as passwordCharacter = passwordCharacters + letters, and using + between 2 string values concatenates them
  }

  var upperCase = confirm("Do you want uppercase letters to be included?")
  if(upperCase){
    passwordCharacters += capital;
  }

  var num = confirm("Do you want numbers to be included?")
  if(num){
    passwordCharacters += numbers;
  }

  var special = confirm("Do you want special characters to be included?")
  if(special){
    passwordCharacters += unique;
  }
  
  var confirmNumber = 0 

    const lettersArray = letters.split("")
    if(lowerCase){
      finalPassword += lettersArray[Math.floor(Math.random() * lettersArray.length)]
      confirmNumber ++
    }              
    const captialArray = capital.split("")
    if(upperCase){
      finalPassword += captialArray[Math.floor(Math.random() * captialArray.length)]
      confirmNumber ++
    }   
    const numbersArray = numbers.split("")
    if(num){
      finalPassword += numbersArray[Math.floor(Math.random() * numbersArray.length)]
      confirmNumber ++
    }   
    const uniqueArray = unique.split("")
    if(special){
      finalPassword += uniqueArray[Math.floor(Math.random() * uniqueArray.length)]
      confirmNumber ++
    }     





    if (passwordCharacters){
      const passwordCharactersArray = passwordCharacters.split("")                                                        

    for (var i = 0; i < passwordLength - confirmNumber; i++){ 
      finalPassword += passwordCharactersArray[Math.floor(Math.random() * passwordCharactersArray.length)] 
      console.log(finalPassword)                                       
    }                                                           
    return finalPassword;                                         
  }
    return "Please select at least one of the criteria"
}

// 83- The split method divides up a string into an array based on the value you give, since I did "" it splits them all and gives me an array of all the characters selecte
// 85- since passwordCharactersArray is an array it will start at 0 and why password length can be < and doesn't have to be <=
// 86- this multiplies a random decimal (0-.99) by my arraylength and gives me a # which math.floor makes into a whole number which access a value in the array
// 87- and I want array.length so it can go up to the number assigned to the last array value
// 88- the final password is looped through and a new character is added each time which gives me final expression
// 89- putting this inside the for statement will only return the first value provided, keeping it on the outside ensures it takes the final expression

// i could make a array split from each individual strings for lets, caps, nums, unique
// confirm whether to include or not based on true/false


// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I CONFIRM whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// alert("Password is: ...") anthony said prefers it's written to page


// max = var.length;
// conesole.log(var[Math.floor(Math.random() * max)]);