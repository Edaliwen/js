let firstName 
let lastName
let city
let selectBouton = document.querySelector("#bt")
selectBouton.addEventListener("click", clickButtonHandler);


function clickButtonHandler(){
    firstName = document.querySelector("#firstName").value
    lastName = document.querySelector("#lastName").value
    city = document.querySelector("#city").value
    result = "Bonjour ! " + firstName + " "+ lastName + " de " + city
    displayAll(result)
}

function displayAll(result){
    document.querySelector("#displayAll").innerHTML = result
}

/* Corrigé

// déclaration des variables qui correspondent aux différents sélecteurs
let prenom = document.querySelector("#firstName")
let valider = document.querySelector("#valider")
let resultat = document.querySelector("#resultat")

// execution de la fonction
prg1_exo3()

function prg1_exo3(){
    // création d'un écouteur sur le bouton valider
    valider.addEventListener("click", validerClickHandler)

    // création de la fonction validerClickHandler avec le paramètre d'évenement
    // event ou e
    function validerClickHandler(event){
        // La méthode preventDefault() annule l'événement s'il est
        // annulable, ce qui signifie que l'action par défaut qui
        // appartient à l'événement ne se produira pas.
        // Par exemple, cela peut être utile lorsque :
            // En cliquant sur un bouton "Submit", l'empêcher de soumettre
            // un formulaire
            // En cliquant sur un lien, empêcher le lien de suivre l'URL
        // Remarque : La méthode preventDefault() n'empêche pas la
        // propagation ultérieure d'un événement via le DOM.
        // Utilisez la méthode stopPropagation() pour gérer cela.
        event.preventDefault()
        // Pour stopper la propagation d’un évènement, on va pouvoir
        // utiliser la méthode stopPropagation() de l’interface Event.
        // Cette méthode va stopper la propagation d’un évènement après
        // qu’un gestionnaire d’évènement (gérant l’évènement en question)
        // ait été atteint.
        event.stopPropagation()
        // déclaration la variable qui récupère la valeur de l'input
        let prenom_valeur = prenom.value
        // ouverture d'une boite de dialogue localhost
        // alert("Bonjour, " + prenom_valeur)
        // écriture du resultat en dessous du bouton au niveau de 
        // id="resultat"
        resultat.innerHTML = "Bonjour, " + prenom_valeur
    }
}

*/