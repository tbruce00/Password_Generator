//Variables

var capLetter = ["A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z"];
var lowerLetter = ["a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z,"];
var character = ["!, @, #, $, %, ^, &, *, (, ), -, =, +, [, ], {, }, /,"];
var number =  [1,2, 3, 4, 5, 6, 7, 8, 9, 10];

var input;
var output;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

var userChoice;

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {

input = parseInt( prompt("Choose between 8 and 128 characters"));
  if (!input) {
    alert ("This needs a value");
  }  else if (input < 8 || input > 128) {

    input = parseInt( prompt("You must choose between 8 and 128 characters"));
  }
  
  else {
    confirmNumber = confirm("Would you like your password to contain numbers?");
    confirmLowercase = confirm("Would you like your password to contain lowercase letters?");
    confirmUppercase = confirm("Would you like your password to contain uppercase letters?");
    confirmCharacter = confirm ("Would you like your passwword to contain special characters?");

  }; if (!confirmCharacter && !confirmLowercase && !confirmNumber && !confirmUppercase) {
    output = alert (" You must choose at least 1 criteria for your password")
  }
  
  else if (confirmUppercase &&  confirmLowercase && confirmNumber && confirmCharacter) {
    output = capLetter.concat(lowerLetter, character, number);
  }
  else if (confirmUppercase && confirmLowercase &&confirmNumber) {
    output = capLetter.concat(lowerLetter, number);
  }
  else if (confirmUppercase && confirmLowercase && confirmCharacter) {
    output = capLetter.concat(lowerLetter, character);
  }
  else if (confirmUppercase && confirmCharacter && confirmNumber) {
    output = capLetter.concat(number, character);
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


  var passwordLength= [];

for (var i = 0; i < input; i++) {
 userChoice = output[Math.floor(Math.random() * output.length)];
  passwordLength.push(userChoice);
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

