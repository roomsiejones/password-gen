// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowLetters = "abcdefghijklmnopqrstuvwxyz";
var upLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

// Write password to the #password input
function writePassword() {
 var upCase = confirm("Do you wish to include uppercase letters? (Click 'Cancel' for no)");
 var lowCase = confirm("Do you wish to include lowercase letters?");
 var numSel = confirm("Do you wish to include numbers?");
 var symbol = confirm("Do you wish to include symbols?");
 var lenSel = prompt("Please type desired password length.". "8-128");

 for i=0; i = length; i++ (
   if i=length{
     return;
   } else {
        if (upCase){
          upper()
        };


   }
 )


 
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  // passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
