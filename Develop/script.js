//Variables

capLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
lowerLetter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "[", "]", "{", "}", "/",];
number =  [1,2, 3, 4, 5, 6, 7, 8, 9, 10];

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate Password Function //

function generatePassword() {
  var input = "";
  var output = "";

  var confirmNumber;
  var confirmCharacter;
  var confirmUppercase;
  var confirmLowercase;

while (isNaN(input) || input < 8 || input > 128) {
input = prompt("Choose between 8 and 128 characters");
input = parseInt(input);
  if (!input) {
    alert ("This needs a value");
  }  else if (input < 8 || input > 128) {
    alert("You must choose between 8 and 128 characters");
  } if (input === true) {
    break;
  } 
}  
  if (input) {
    confirmNumber = confirm("Would you like your password to contain numbers?") == true;
    confirmLowercase = confirm("Would you like your password to contain lowercase letters?") == true;
    confirmUppercase = confirm("Would you like your password to contain uppercase letters?") == true;
    confirmCharacter = confirm ("Would you like your passwword to contain special characters?") == true;
    
  }; if (!confirmCharacter && !confirmLowercase && !confirmNumber && !confirmUppercase) {
    output = alert (" You must choose at least 1 criteria for your password")
  }
  
  else if (confirmUppercase &&  confirmLowercase && confirmNumber && confirmCharacter) {
    output = capLetter.concat(lowerLetter, character, number);
  }
  else if (confirmUppercase && confirmLowercase &&confirmNumber) {
    output = capLetter.concat( + lowerLetter, number);
  }
  else if (confirmUppercase && confirmLowercase && confirmCharacter) {
    output = capLetter.concat( lowerLetter, character);
  }
  else if (confirmUppercase && confirmCharacter && confirmNumber) {
    output = capLetter.concat( number, character);
  }
  else if (confirmLowercase && confirmNumber && confirmCharacter) {
    output = lowerLetter.concat(character, number);
  }
  else if (confirmUppercase && confirmLowercase) {
    output = capLetter.concat(lowerLetter);
  }
  else if (confirmUppercase && confirmNumber){
    output = capLetter.concat(number);
  }
  else if (confirmUppercase && confirmCharacter) {
    output = capLetter.concat(character);
  }
  else if (confirmLowercase && confirmNumber) {
    output = lowerLetter.concat(number);
  }
  else if (confirmLowercase && confirmCharacter) {
    output == lowerLetter.concat(character);
  }
  else if (confirmNumber && confirmCharacter) {
    output = number.concat(character);
  }
  else if (confirmUppercase) {
    output = capLetter;
  }
  else if (confirmLowercase) {
    output = lowerLetter;
  }
  else if (confirmNumber) {
    output = number;
  }
  else if (confirmCharacter) {
    output = character;
  }


for (var i = 0; i < input; i++) {
 var userChoice = output[Math.floor(Math.random() * output.length)];
  password += userChoice; //creates a string based on user choices //
}

return password;
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

