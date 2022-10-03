// Assignment code here
var characterLength = 8;
var choices = [];

//All the different options
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialchar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" ];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var correctPrompts =  getPrompts();
  var passwordText = document.querySelector("#password");
  
  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
}

// Function that creates a math equation that combines all the options
function generatePassword() {
  var password = "";

  for (var i = 0; i < characterLength; i++) {
    var randomIndex = Math.floor(Math.random() * choices.length);
    password = password + choices[randomIndex];
  }
  return password;
}

//Function that give the options for what your password will contain
function getPrompts() {
  choices = [];

  characterLength = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("This need a value!");
    return false;
  }
  
  if (confirm("Will your password contain lowercase letters?")) {
    choices = choices.concat(lowercase);
  }
  if (confirm("Will your password contain uppercase letters?")) {
    choices = choices.concat(uppercase);
  }
  if (confirm("Will your password contain special characters?")) {
    choices = choices.concat(specialchar);
  }
  if (confirm("Will your password contain numbers?")) {
    choices = choices.concat(number);
  }
  return true;
}