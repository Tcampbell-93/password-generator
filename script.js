// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {

    var characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","p","q","r","s","t","u","v","w","x","y","z"];
    var numbers = [1,2,3,4,5,6,7,8,9,0];
    var special = ["!","@","#","$","&","*","+","="];
    var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","P","Q","R","S","T","U","V","W","X","Y","Z"]; //Adding variables for characters I want to use

    var characterLength = prompt("Choose length of password. (between 8 and 128 characters)");
    var includeNumbers = confirm("Do you want to add numbers to your password?");
    var includeSpecial = confirm("Do you want to include special characters in your password?");
    var includeUppercase = confirm("Do you want to include uppercase letters in your password?");    //Giving the user the options to use/not use said characters

    if (characterLength >= 8 && characterLength <= 128) {       //Validation of correct character length
      var password = "";

      for (var i = 0; i < characterLength; i++) {
        var randomCharacter = Math.floor(Math.random() * 4);
      
      if (randomCharacter === 1 && includeNumbers == true) {
        var index = Math.floor(Math.random() * numbers.length);
        password += numbers[index];
      } else if (randomCharacter === 2 && includeSpecial == true) {
        var index = Math.floor(Math.random() * special.length);
        password += special[index];
      } else if (randomCharacter === 3 && includeUppercase == true) {
        var index = Math.floor(Math.random() * uppercase.length);
        password += uppercase[index];
      } else {
        var index = Math.floor(Math.random() * characters.length);            //Originaly had this first and had a hard time figuring out how to exclude other character types and still have correct character length
        password += characters[index];
      }
      }
      
      return password;
      
      } else {
        window.alert("Password has to be between 8 and 128 characters.");       // adding alert for if character length is incorrect
    }
  }
}
  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);