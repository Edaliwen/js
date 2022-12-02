## Exercice 1

Définir une variable et l'afficher.
C'est un entier de valeur 6.
Afficher dans une boîte d'alerte.

## Exercice 2

Définir 3 variables : lastName, firstName et city.
Les afficher comme un formulaire prérempli avec votre nom, prénom et ville

## Exercice 3

Saisir son prénom dans un champ de formulaire, valider la saisie avec un bouton (écouteur d'événement)
Afficher dans une boîte de dialogue "Bonjour, " suivi du prénom saisi

## Exercice 4

Demander le nom, le prénom et la ville et afficher le résultat de l'ensemble dans une boîte de dialogue

## Exercice 5

Créer 2 boutons : 
   - 1. augmenter (bleu)
   - 2. diminuer (rouge)

- [x] Partir de 0 pour le résultat
- [x] Augmenter et diminuer avec un pas de 1
- [x] Afficher le résultat en dynamique au dessus des boutons 

## Exercice 6 : devinerLeNombre

Afficher le titre du jeu : Deviner le nombre
Afficher "Deviner un nombre entre 1 et 100"
 - [x] au départ on a un bouton (bleu) "Cliquer pour jouer"
 - [x] une fois qu'on a cliqué sur le bouton, on le fait disparaître et on le remplace par un champ qui permet d'écrire notre nombre et un bouton en dessous qui permet de valider ce nombre
 - [x] si le nombre est trop petit, indiquer au dessus du champ "c'est plus !!"
 - [x] si le nombre est trop grand, indiquer au dessus du champ "c'est moins !!"
 - [x] si le nombre correspond au nombre choisi au hasard on affiche "c'est gagné !!"
 - [ ] faire disparaître le champ et le bouton
 - [ ] proposer un bouton rejouer

## Exercice 7 : calculatrice (optionnel)

![modèle de calculatrice](assets/images/calculatrice.png)

## Exercice 8 : survolImage

![logo js](assets/images/imgJs.png)

Afficher une image et lui rajouter une bordure rouge de 3px au survol

## Exercice 9 : motAleatoire

En partant du tableau suivant :
 - chocolat
 - pyramide 
 - automobile
 - synonyme 
 - lion
 - perpendiculaire

- [ ] Quand on clique sur un bouton "Cliquer ici !" cela nous trouve un mot au hasard dans le tableau et l'affiche à l'écran
- [ ] Le mot choisi au hasard est sauvegardé et on affiche à la place un ? pour chaque lettre du mot

## Exercice 10 : Le jeu du pendu

Règle du jeu : https://fr.wikipedia.org/wiki/Pendu_(jeu)

### 1. Réfléchir à l'html

- [ ] titre
- [ ] règles
- [ ] balises pour mettre les ? pour chaque lettre du mot
- [ ] balise label (*bootstrap form-group*)
- [ ] balise input (*bootstrap form-control*)
- [ ] balise button (*bootstrap btn*)
- [ ] attention, ne pas oublier de mettre un sélecteur sur chaque balise

### 2. Réfléchir au js

- [ ] déclarer un tableau avec des mots
- [ ] mélanger ces mots et choisir un mot au hasard que l'on garde de côté (*fonction*)
- [ ] afficher l'interface avec le nombre de cases ? correspondant au nombre de lettres du mot à trouver (*fonction*)
- [ ] vérification (*fonction*) :
    - [ ] vérifier si la lettre entrée par l'utilisateur correspond à une des lettres du mot (*fonction*) :
        - [ ] si oui afficher la lettre à la place du point d'interrogation au bon endroit (*fonction*)
        - [ ] sinon afficher un message d'erreur (*alert()*) avec le nombre d'erreur restant (*constante max d'erreurs*)
    - [ ] gérer le message de fin de jeu (gagnant/perdant) (*alert()*)
    - [ ] gérer la relance du jeu (*fonction*)