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
/* Js étant un langage de script, il peut fonctionner directement dans une page HTML entre des balises <script></script>, mais ce n'est pas une bonne pratique.
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


