// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowLetters = "abcdefghijklmnopqrstuvwxyz";
var upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

// creates function to generate password
function generatePassword(){
  var passGenerated = "";
  var usedchars = "";



// Asks user for password length
  var lenSel = prompt("Please type desired password length.", "8-128");

// checks to see if it's 8-128 length before continuing and if it's actually a number
  if (isNaN(lenSel)) {
    window.alert (lenSel + "is not a valid value. Please try again.");
    return;
                      } else if (lenSel < 8 || lenSel > 128) {
      window.alert ("Value must be between 8-128 characters. Please try again.");
      return;
                                                            };

                              


// Asks if user wants to include uppercase letters
var upCase = confirm("Do you wish to include uppercase letters? (Click 'Cancel' for no)");
    if (upCase) {
      usedchars += upLetters;
    }

// Asks if user wants to include lowercase letters
var lowCase = confirm("Do you wish to include lowercase letters?");
    if (lowCase) {
      usedchars += lowLetters;
    }

// Asks if user wants to include numbers
var numSel = confirm("Do you wish to include numbers?");
    if (numSel) {
      usedchars += numbers;
    }

//  Asks if user wants to include symbols
var symbolSel = confirm("Do you wish to include symbols?");
    if (symbolSel) {
      usedchars += symbols;
    }

//  If they don't select any of the options, it'll return an error
if (!upCase && !lowCase && !numSel && !symbolSel) {
      window.alert ("You must select at least one option.");
      return;
}

// Runs a randomizer for the generator after all the prompts are answered appropriately.
for (i = 0; i < lenSel; i++){
  passGenerated += usedchars [Math.floor(Math.random() * usedchars.length)];
};
    return passGenerated
  }

// Write password to the #password input
function writePassword() {
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
