//Les commentaires sous Javascript

//Commentaires dur une ligne
/* Commentaires
sur 
plusieurs
lignes
*/

// 1 - Langage Javascript ?
/* Javascript (js) : est un langage de programmation qui ajoute de l'interactivité à votre site web : jeux, réponses quand on clique sur un bouton ou des données entrées dans des formulaires, composition dynamique, animation)
Quand il est appliqué à un document HTML, il peut fournir une interactivité dynamique.
IL a été inventé en 1996 par Brendan Eich, co-fondateur du projet Mozilla, de la Mozilla Foundation et la Mozilla Corporation
*/

/* C'est un langage algorithmique de type script qui dépend de la norme EMAScript.
ECMAScript (European Computer Manufacturers Association) : ensemble de normes concernant les langages de programmation de type script (langage non-compilé ou langage pointé) et standardisé par ECMA International.
Les spécifications js sont rédigées dans le document standard ECMA-262.
ECMAScript Edition 6 (ES6)
Normé ES2015 et publié en juin 2015.
Elle prend en charge toutes les versions récentes de navigateur.
Version actuelle ES12
*/

// 2 - Comment utiliser JS ?
 https://developer.mozilla.org/en-US/docs/Web/JavaScript
/*
Js étant un langage de script, il peut fonctionner directement dans une page HTML entre des balises <script></script>, mais ce n'est pas une bonne pratique.
Le mieux c'est de créer un fichier avec l'extension .js dans le dossier js et faire pointer avec une balise script comme ceci : <script src="assets/js/~.js"></script>
Ce script doit être placé juste au dessus de la balise </body> et en dessous des script des diverses API (Application Programming Interface).
*/ 

// 2.1 - Visualiser dans la console du navigateur : commande console.log()
/* la commande console.log() permet de visualiser les informations de ce qu'il y a entre les parenthèses dans l'inspecteur -> onglet console du navigateur.
Cette commande est très pratique pour débugger son code ou pour voir ce qu'il se passe avec une partie de notre script (une variable, une propriété, un objet)
*/

// 2.2 - La propriété location : est une propriété native js avec diverses informations sur l'url
console.log(location);
// pour information le ; n'est pas obligatoire en fin de ligne.

// 2.3 - La propriété document : le DOM (Document Object Model) est votre page HTML
console.log(document);
/*par exemple quand on veut faire un refresh de notre page en cours
document.location.reload();
*/

// 3 - Sélectionner des objets dans un document

// 3.1 - Méthode native js getElementById("~");
//Sélectionne un objet par le sélecteur id dans l'HTML
document.getElementById("id1");
//Créer une balise <div id="id1"></div> dans l'HTML

// 3.2 - Méthode native js getElementByClassName("~");
//Sélectionne un objet par le sélecteur class dans l'HTML
document.getElementsByClassName("class1");
//Créer une balise <div class="class1"></div> dans l'HTML

// 3.3 - Méthode native js querySelector("~");
//Sélectionne un objet par une balise sélecteur personnelle dans l'HTML
document.querySelector("maBalise");
//Créer une balise <maBalise></maBalise> dans l'HTML

// 3.4 - Méthode native js querySelector("#~");
//Sélectionne un objet par le sélecteur id="~"
document.querySelector("#id2");
//Créer une balise <div id="id2"></div> dans l'HTML

// 3.5 - Méthode native js querySelector(".~");
//Sélectionne un objet par le sélecteur class="~"
document.querySelector(".class2");
//Créer une balise <div class="class2"></div> dans l'HTML

// 4 - Récupérer des objets dans un document

// 4.1 - La propriété textContent
/* Permet de récupérer une chaîne de caractères
Rajouter du texte dans la div <div id="id2"></div> -> Attention au #
*/
document.querySelector("#id2").textContent;
console.log(document.querySelector("#id2").textContent);
// Rajouter du texte dans la div <div class="class2"></div> -> Attention au .
document.querySelector(".class2").textContent;
console.log(document.querySelector(".class2").textContent);

// 4.2 - La propriété value
// Permet de récupérer une valeur dans une balise <input>
console.log(document.querySelector("input").value);

// 5 - Ecrire dans document

// 5.1 - La propriété innerHTML
// Ecrire "BONJOUR JS" sur id="id3"
document.querySelector("#id3").innerHTML = "BONJOUR JS";

// 5.2 - La propriété style
// Permet d'utiliser du css 
document.querySelector("#id3").style.backgroundColor ="red";

// 6 - Les variables : var let const
/* Les différentes déclarations  de variables sont des réservations d'un espace mémoire RAM
(mémoire vive : Random Access Memory)
La déclaration d'une variable en dehors d'une fonction a une portée globale.
La déclaration d'une variable dans une fonction a une portée limitée entre les {}
Avant l'ES6 il n'existait que l'instruction var pour déclarer une variable mais cela peut poser un problème de portabilité. Depuis ils ont créé let et const.
*/

// 6.1 - Déclaration d'une chaine de caractères (type string)
let cdc ="Je suis en formation";
console.log(cdc);
let cdc1 = "Nous sommes le 28 novembre 2022";
console.log(cdc1);

// 6.2 - Déclaration d'un nombre entier de type integer
let nombre1 = 25;
console.log(nombre1);

// 6.3 - Déclaration d'un nombre décimal de type float
let decimal = 50.2; //(Attention c'est un . pas une ,)
console.log(decimal);

// 6.4 - Déclaration d'un nombre binaire 0 ou 1 de type boolean
// 0 vaut false et 1 vaut true
let bool1 = false;
let bool2 = true;
console.log(bool1);
console.log(bool2);

// 6.5 - Déclaration d'une variable existante let
cdc = 16;
console.log(cdc);

// 6.6 - Déclaration d'une constante avec const
// La particularité d'une constante est qu'elle ne peut pas être redéclarée
const maConstante = "ceci est une constante";
console.log(maConstante);
// Si j'essaye de redéclarer ma constante:
// maConstante = 15;
// console.log(maConstante); // message d'erreur, le script s'arrête

// 6.7 - Déclaration d'un tableau (type array)
// Un tableau vide
let tabVide = [];
// un tableau rempli
let tabRempli = ["Emmanuel","Bacour", true, 5, 8.6];
console.log(tabRempli);
/* "Emmanuel", "Bacour", true, 5 et 8.6 sont des éléments (valeurs, items) qui sont placés par orde d'index (clé, key) : ici "Emmanuel" se trouve à l'index 0 et 8.6 à l'index 4. Pour aller chercher un élément, on lefait par son index
*/
console.log(tabRempli[0]); // Affiche Emmanuel dans la console
console.log(tabRempli[3]); // Affiche 5 dans la console

// 6.8 - Déclaration d'un tableau d'objets
// En js le tableau d'objet se nomme JSON (JavaScript Object Notation)
let objets1 = {
    "prenom":"Emmanuel",
    "nom":"Bacour"
}