let trouverLeNombre = 0
let userGuess
let message

let buttonStart = document.querySelector("#start")
let buttonGuess = document.querySelector("#guess")
buttonStart.addEventListener("click", start);
buttonGuess.addEventListener("click", guess);


function start(){
    trouverLeNombre = Math.floor(Math.random()*(99) + 1)
    console.log(trouverLeNombre)
}

function guess(){
    console.log(trouverLeNombre)
    userGuess = document.querySelector("input").value
    if(userGuess > trouverLeNombre && userGuess <= 100){
        message = "C'est moins !!"
        displayMessage(message)
    } else if (userGuess < trouverLeNombre && userGuess >= 0) {
        message = "C'est plus !!"
        displayMessage(message)
    } else if(userGuess == trouverLeNombre){
        alert("Bravo c'est gagné !!")
    } else {
        alert("On a dit un nombre entre 1 et 100 !!")
    }    
}

function displayMessage(message){
    document.querySelector(".message").innerHTML = message
}