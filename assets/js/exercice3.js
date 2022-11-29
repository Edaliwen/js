let firstName
let selectBouton = document.querySelector("#bt")
selectBouton.addEventListener("click", clickButtonHandler);

function clickButtonHandler(){
    firstName = document.querySelector("#firstName").value
    disBonjourAvecLePrenom(firstName)
}

function disBonjourAvecLePrenom(firstName){
    alert("Bonjour " + firstName + " !");
}