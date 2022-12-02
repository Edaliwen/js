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
const erreurMax = 14
// nombre d'erreurs
let erreur = 0

// Exécution de la fonction interface()
interface()
motAuHasard()
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
    console.log(index)
    // on place le mot correspondant à l'index dans la variable leMot
    leMot = tabMots[index]
    console.log(leMot)
}

function interface(){

}

