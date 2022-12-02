// Déclaration des différents sélecteurs pour les mettre dans des variables
let pendu_lettres = document.querySelector(".pendu-lettres")
let bouton = document.querySelector("#bt")
let lettre = document.querySelector("#lettre")

// Déclaration du tableau de mots
let tabMots = [
    "chocolat",
    "pyramide",
    "automobile",
    "synonyme",
    "lion",
    "perpendiculaire"
]

// le mot trouvé
let leMot
// erreur Maximum
const erreurMax = 9
// nombre d'erreurs
let erreur = 0

lettre.value = ""

// Exécution de la fonction mot au hasard()
motAuHasard()
// Exécution de la fonction interface()
interface()

function motAuHasard(){
    // déclaration d'une variable pour le hasard
    let aleatoire
    // déclaration d'une variable pour la position du mot dans le tableau
    let index
    // calcul du hasard entre 0 et 1
    aleatoire = Math.random()
    console.log(aleatoire)
    // tirage aléatoire de l'index du tableau, arrondi à l'entier le plus proche / length correspond ici à la longueur du tableau
    index = Math.round(aleatoire * (tabMots.length))
    console.log("On va chercher le mot à l'index " + index + " du tableau")
    // on place le mot correspondant à l'index dans la variable leMot
    leMot = tabMots[index]
    console.log("le mot choisi aléatoirement est : " + leMot)
    //interface(leMot)
}

/* La mise en place :
    Suite au tirage du mot, on place qutant de span que de lettres du mot avec un ? à la place de chaque lettre dans l'html
    (dans la classe html .pendu-lettres)
*/
function interface(){
    // à l'aide de la longueur du mot on fait une boucle for
    for(let i = 0; i < leMot.length; i++){
        // on fabrique des span que l'on injecte dans la page
        pendu_lettres.innerHTML += '<span class="case-lettre me-3">?</span>'
    }
}

// création d'un écouteur d'événement "click" sur bt
bouton.onclick = (e) =>
{
    e.preventDefault()
    e.stopPropagation()
    // condition si le champ input est vide
    if (lettre.value == "") {
        // message d'alerte
        alert("veuillez entrer une lettre SVP !!")
    }
    else {
        verification()
    }
}

// fonction qui analyse la lettre entrée
function verification(){
    // récupération de la lettre saisie
    let lettreSaisie = lettre.value
    console.log("La lettre saisie est " + lettreSaisie)
    console.log(leMot.indexOf(lettreSaisie))
    if(leMot.indexOf(lettreSaisie) == -1){
        // ----la lettre n'existe pas dans le mot----
        erreur++
        console.log(erreur)
        if(erreur >= erreurMax){
            alert("Désolé, vous avez perdu !\nCliquez sur ok pour relancer le jeu.")
            // rafraichissement de la page pour relancer le jeu
            document.location.reload()
        }   
        else {
            alert("Dommage !!\nCette lettre n'est pas dans le mot.\nVous avez encore droit à " + (erreurMax - erreur) + " erreurs.")
        }
    }
    else {
        /* ----la lettre existe dans le mot----
            déclaration de tous les sélecteurs .case-lettre en fonction du nombre de lettres, cela fabrique un tableau
        */
       let case_lettre = document.querySelectorAll(".case-lettre")
       // dans une boucle for, on passe en revue chaque lettre du mot à trouver
       for(let i = 0; i < leMot.length; i++){
        // si la lettre passée en revue est égale à la lettre cherchée
        if(leMot[i] == lettreSaisie){
            // On affiche la lettre dans les bonnes cases
            // Tous les sélecteurs case-lettre se trouvent dans un tableau dont on va chercher l'index i pour y mettre lettreSaisie
            case_lettre[i].innerHTML = lettreSaisie
            // On vérifie si on a gagné
            // déclaration d'une variable pour sauvegarder le nombre de ?
            let numInterrogation = 0 
            // On passe en revue le tableau des case_lettre avec la méthode foreach((element) => {...})
            case_lettre.forEach((element) => {
                // Si la valeur de l'élément est égale à un ?
                if(element.textContent == "?"){
                    // On incrémente notre variable de +1
                    numInterrogation++
                }
            })
            // si numInterrogation est égale à 0, c'est qu'il n'y a pas de ? donc on a trouvé le mot
            if(numInterrogation == 0 ){
                // Fenêtre d'alerte
                alert("Bravo!!! :) \nVous avez gagné !! \nLe mot est bien " + leMot +"\nCliquez sur OK pour rejouer.")
                // On refresh la page pour rejouer
                document.location.reload()
            }
            // On ne place rien dans le champs input
            lettre.value =""
        }
       }
    }
}

