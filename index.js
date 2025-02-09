const passwordBox = document.getElementById("password")
const length = 16;

const upperCase = "ABCDEFGHIJKLMNOPQRSUVWXYXZ"
const lowerCase = "abcdefghijklmnopqrsuvwxyz"
const numbers = "0123456789"
const symbols = "!@#$%^&*()"
const allChars = upperCase + lowerCase + numbers + symbols;
function createPass(){
    let password="";
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += numbers[Math.floor(Math.random()*numbers.length)];
    password += symbols[Math.floor(Math.random()*symbols.length)];

    while(length>password.length){
        password += allChars[Math.floor(Math.random()* allChars.length)];
    }
    passwordBox.value=password;
}