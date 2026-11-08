//PRACTICING USER INPUT

//EASY WAY

let username;

username = window.prompt("What's your username?");

console.log(username);

//COOL WAY
let username2;
document.getElementById("mysubmit").onclick = function(){
    username2 =document.getElementById("myText").value;
    console.log(username2);
}