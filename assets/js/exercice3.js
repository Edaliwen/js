let firstName = "Amandine"
let selectBouton = document.querySelector("#bt")
selectBouton.addEventListener("click", clickButtonHandler);


function clickButtonHandler(){
    firstName = document.querySelector("#firstName").value
    displayFirstName(firstName)
}

function displayFirstName(firstName){
    document.querySelector("#displayFirstName").innerHTML = "Bonjour " + firstName + " !"
}
