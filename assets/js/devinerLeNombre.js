let trouverLeNombre = 0
let userGuess
let message

let buttonStart = document.querySelector("#start")
let buttonGuess = document.querySelector("#guess")
let guessNumber = document.querySelector("#guessNumber")
buttonStart.addEventListener("click", start)
buttonGuess.addEventListener("click", guess)

guessNumber.style.display = "none"


function start(){
    trouverLeNombre = Math.floor(Math.random()*(99) + 1)
    buttonStart.style.display = "none"
    guessNumber.style.display = "block"
    console.log(trouverLeNombre)
}

function guess(){
    console.log(trouverLeNombre)
    userGuess = document.querySelector("input").value
    if(userGuess > trouverLeNombre && userGuess <= 100){
        message = "C'est moins !!"
        displayMessage(message) // Modifier avec une boîte d'alerte warning
    } else if (userGuess < trouverLeNombre && userGuess >= 0) {
        message = "C'est plus !!" // Modifier avec une boîte d'alerte warning
        displayMessage(message)
    } else if(userGuess == trouverLeNombre){
        alert("Bravo c'est gagné !!")
        // Ouverture modale et refresh de la page
    } else {
        alert("On a dit un nombre entre 1 et 100 !!")
        // Créer un message d'alerte danger
    }    
}

function displayMessage(message){
    document.querySelector(".message").innerHTML = message
}