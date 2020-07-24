// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {

    let q1
    let q2
    let q3
    let q4

    let udigit = prompt('From 8 to 128, How many digits would you like?')

    let uucase = prompt('Would you like uppercase? Please type in "yes" or "no".')
    if (uucase==='yes') {
        q1=['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    } else {
        q1=[]
    }

    let ulcase = prompt('Would you like lowercase? Please type in "yes" or "no".')
    if (ulcase==='yes') {
        q2=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    } else {                  
        q2=[]     
    }

    let unum = prompt('Would you like some numbers? Please type in "yes" or "no".')
    if (unum==='yes') {
        q3=['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

    } else {
        q3=[]
    }

    let uchar = prompt('Would you like special characters? Please type in "yes" or "no".')
    if (uchar==='yes') {
        q4=['+', '-', '&','!' , '(', ')', '{', '}', '[', ']', '^', '~', '*', '?', ':']

    } else {
        q4=[]
    }

    let finalpool = q1.concat(q2,q3,q4)

    let pw = []

    for (let i=0; i<udigit; i++){

        pw.push(finalpool[Math.floor(Math.random()*finalpool.length)])

    }

    let result = pw.join('')

    return result

}


function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

