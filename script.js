//Generated Password from user
var genPswd = '';

//*Password Variables (in string format):(a,B, #, specialCharacter)

let lwrCase="abcdefghijklmnopqrstuvwxyz";
let uppCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numChar="0123456789";
let spcChar="!@#$^&%*()+=-[]{}|:<>?,.";

//If extra criteria is not wanted // trouble with an alert to notify user if none are choseen
badLow = false;
badUp = false;
badNum = false;
badSpc = false;

//Once Generate button is pressed from HTML 
function generate() {
  var goodLen = '';
  //confirms a number between 8 and 128 long
  while (isNaN(goodLen) || goodLen < 8 || goodLen > 128) {
      goodLen = prompt("Please choose a number between 8 to 128 to determine character length:");
      if (goodLen === null) {
          continue;
      }
  }
//Prompt for the next set of criteria after length is entered
  if (goodLen) {
      if (confirm("Would you like to use lowercase characters?") == true) {
          badLow = true
      } 
      if (confirm("Or uppercase characters?") == true) {
          badUp = true
      }
      if (confirm("How about numerical characters?") == true) {
          badNum = true
      }
      if (confirm("Lastly, would you like to use special characters?") == true) {
          badSpc = true
      }
  }
//generate random password
  var characters = '';
  characters += (badLow ? lwrCase : '');
  characters += (badUp ? uppCase : '');
  characters += (badNum ? numChar : '');
  characters += (badSpc ? spcChar : '');

  genPswd = password(goodLen, characters);

  document.getElementById("password").innerHTML = genPswd;

}
//Last function to post the password on the display area
//Grabs a character from each of the string critera above
function password(l, characters) {
  var genPswd = '';
  for (var i = 0; i < l; ++i) {
      genPswd += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return genPswd;
}