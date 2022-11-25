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

// Comment utiliser JS ?
/* Js étant un langage de script, il peut fonctionner directement dans une page HTML entre des balises <script></script>, mais ce n'est pas une bonne pratique.
Le mieux c'est de créer un fichier avec l'extension .js dans le dossier js et faire pointer avec une balise script comme ceci : <script src="assets/js/~.js"></script>
Ce script doit être placé juste au dessus de la balise </body> et en dessous des script des diverses API (Application Programming Interface).
*/ 

// 2-1 Visualiser dans la console du navigateur : commande console.log()
/* la commande console.log() permet de visualiser les informations de ce qu'il y a entre les parenthèses dans l'inspecteur -> onglet console du navigateur.
Cette commande est très pratique pour débugger son code ou pour voir ce qu'il se passe avec une partie de notre script (une variable, une propriété, un objet)
*/

// 2-2 La propriété location : est une propriété native js avec diverses informations sur l'url
console.log(location);