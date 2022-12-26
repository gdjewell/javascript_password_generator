// Assignment Code
var generateBtn = document.querySelector("#generate");
var finalPassword = [];
var upperCaseLetters = ["A","B", "C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V", "W","X","Y","Z"];
var lowerCaseLetters = ["a","b","c","d","e","f","g","h","i","j","k","l", "m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters =  ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "[", "]", "{", "}", ";", "?"]
var totalChars = [];
var numOfChar;
var upperCaseLettersConfirm;
var lowerCaseLettersConfirm;
var specialCharsConfirm;
var numbersConfirm;


/* Ask user questions to confirm  what characters they want int their password*/

function askQuestions() {

  /* This question asks the user how many characters their password will have and converts those characters into an integer */

  numOfChar = parseInt(prompt("How many characters does this password have? Please enter a number between 8 and 128."));

  /* This if statement will determine if the password length requirements are met. If not, questions will repeat. */
  
  if (numOfChar < 8 || numOfChar > 128) {

    askQuestions();
    return;
  }
  
  /* These series of questions determine if the user will use certain characters in their password, and upon confirming, an if statement is used to add their answer to the list of total characters */

  upperCaseLettersConfirm = confirm("Do you want uppercase letters?");
  if (upperCaseLettersConfirm) {
    totalChars = totalChars.concat(upperCaseLetters);
  }
  lowerCaseLettersConfirm = confirm("Do you want lowercase letters?");
  if (lowerCaseLettersConfirm) {
    totalChars = totalChars.concat(lowerCaseLetters);
  }
  specialCharsConfirm = confirm("How about special characters?");
  if (specialCharsConfirm) {
    totalChars = totalChars.concat(specialCharacters);
  }
  numbersConfirm = confirm("Finally, would you like numbers?");
  if (numbersConfirm) {
    totalChars = totalChars.concat(numbers);
  }

  /* If no answer characters are selected we'll ask user if they want to try again, if not return a message they didn't select any characters to be generated */


  if (!upperCaseLettersConfirm && !lowerCaseLettersConfirm && !numbersConfirm && !specialCharsConfirm) {
    var noValidChoice = confirm("You entered no valid information. Do you want to try again?");
    if (noValidChoice) {
      askQuestions();
    }
    else {
      return "You didn't enter a valid selection so no password can be generated."
    }
  }
}



function generatePassword() {

  askQuestions();
  
  
  
  for (i = 0; i < numOfChar; i++) {
    finalPassword += totalChars[Math.floor(Math.random() * totalChars.length+1)];
    
  }

  return finalPassword;

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
