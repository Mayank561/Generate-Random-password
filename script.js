const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "123456789";
const symobol = "@#$%/^&*()_+~|}[]></-=";

const allChars = upperCase + lowerCase + number + Symbol;
// gen random password
function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symobol[Math.floor(Math.random() * symobol.length)];

    // adding random charcter 12
    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    // display pass as a input box
    passwordBox.value = password;
}

function copyPassword(){
    passwordBox.ariaSelected();
    document.execCommand("copy");
}