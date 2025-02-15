
function isValidLength(){
    let numberOfLetters=document.getElementById("passLength").value;

    if(isNaN(numberOfLetters) || length<4 && length>50){
        alert("Enter a valid length between 4-50" )
        return;
    }

    let password=getPass(numberOfLetters);
    document.getElementById("passwordOutput").value=password
}

function getPass(numberOfLetters){
    let caps="ABCDEFGHIJKLMNOPQRSUVWXYZ";
    let smalls="abcdefghijklmnopqrsuvwxyxz";
    let numbers="1234567890";
    let symbols="!@#$%^&*()_+<>"

    let allChar= caps + smalls + numbers + symbols;
    let pass="";

    for(let i=0;i<numberOfLetters;i++){
        pass=pass+allChar[Math.floor(Math.random()*allChar.length)];
    }

    return pass;
}

function copyFunction(){
    let copypass=document.getElementById("passwordOutput");
    copypass.select();
    document.execCommand("copy")
    alert("COPIED TO CLIPBOARD!")
}
