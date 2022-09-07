const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
// console.log(characters[0]);
let btn = document.querySelector(".btn");
let firstPass = document.getElementById("firstPass");
let secondPass = document.getElementById("secondPass");
let firstPassGen,secondPassGen,char;


btn.addEventListener("click",()=>{
    // firstPass.value=0;
    let numberOfChar = document.querySelector('.input-field');
    numberOfChar =numberOfChar.value;
    firstPass.textContent= genratePassword(numberOfChar);
    secondPass.textContent= genratePassword(numberOfChar);
    // numberOfChar="";
    // location.reload();
    
});

function genratePassword(numberOfChar){
    firstPassGen="";
    for(let i=0; i<numberOfChar; i++){
        char = Math.floor(Math.random()*characters.length);
        firstPassGen+=characters[char];
    }

    return firstPassGen;


}

