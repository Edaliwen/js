
prg_devinerLeNombre()

function prg_devinerLeNombre(){
    // déclaration des variables qui correspondent à nos balises avec leur
    // sélecteurs
    let boutonStart = document.querySelector("#start")
    let response =  document.querySelector("#response")
    let inputGuess = document.querySelector("#guess")
    let boutonSend =  document.querySelector("#send")

    // faire disparaire le champs et le bouton valider
    inputGuess.style.display = "none"
    boutonSend.style.display = "none"

    // déclarer un écouteur sur le bouton start et lancer une fonction
    boutonStart.onclick = function(e){
        // console.log(e)
        e.preventDefault()
        e.stopPropagation()
        // une fois le bouton start cliqué :
        //- faire disparaitre le bouton start
        boutonStart.style.display = "none"
        //- faire apparaitre le champ
        inputGuess.style.display = "block"
        //- faire apparaitre le bouton valider
        boutonSend.style.display = "block"
        // déclaration du nombre a trouver
        let trouveLeNombre
        // on utilise la class Math associée aux méthode floor() et random()
        // pour calculer un nombre au hasard entre 1 et 100
        // La fonction Math.floor(x) renvoie le plus grand entier qui est
        // inférieur ou égal à un nombre x.
        // La fonction Math.random() renvoie un nombre flottant pseudo-aléatoire
        // compris dans l'intervalle [0, 1[ (ce qui signifie que 0 est compris
        // dans l'intervalle mais que 1 en est exclu)
        trouveLeNombre = Math.floor(Math.random()*(99) + 1)
        console.log(trouveLeNombre)
        // déclaration d'un écouteur d'évènement sur le bouton valider
        // et de sa fonction qui va englober la gestion de l'information
        // c'est + ou c'est -
        boutonSend.onclick = (e) => {
            e.preventDefault()
            e.stopPropagation()
            // déclaration de la variable guess (deviner)
            let deviner
            // récupération de valeur inscrite dans le champs avec value
            deviner = inputGuess.value 
            // déclaration d'une condition if else if else
            // si c'est vrais que deviner est supérieur à trouverLeNombre
            if(deviner > trouveLeNombre){
                response.innerHTML = "Ah ah ! c'est moins !!"
            }
                // sinon si c'est vrais que deviner est inférieur à
                // trouverLeNombre
                else if(deviner < trouveLeNombre){
                    response.innerHTML = "Ah ah ! c'est plus !!"
                }
            // sinon le nombre a été trouvé deviner est égale 
            // à trouverLeNombre
            else{
                // on ouvre une fenètre d'alerte avec Vous avez gagné
                let gagner
                gagner = "Bravo !!\nVous avez gagné.\nLe nombre à trouver était bien " + trouveLeNombre + ".\nCliquer sur le bouton ok pour rejouer."
                alert(gagner)
                // rafraichissement de notre page pour relancer le script
                document.location.reload()
            }
        }
    }
}

<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Css Bootstrap -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <!-- notre css -->
        <link rel="stylesheet" href="assets/css/styleFront.css">
        <title>Jeu deviner le nombre.</title>
    </head>
    <body>
        <header>
            <div class="container">
                <div class="row text-center border rounded pt-1 mt-3">
                    <h4>JAVASCRIPT</h4>
                </div>
            </div>
        </header>
        <main>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h5>Jeu : Deviner le nombre</h5>
                        <h6>Règle : Deviner un nombre entre 1 et 100.</h6>
                        <button id="start" class="col-2 btn bg-primary text-dark fw-bold mt-3">Cliquer pour jouer</button>
                        <p id="response"></p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-5">
                        <input class="col-5 form-control" id="guess" type="text"/>
                    </div>
                </div>    
                <button id="send" class="col-1 btn bg-primary text-dark fw-bold mt-3">Valider</button>
            </div>
        </main>
        <footer>

        </footer>
        <!-- scrpit js bootstrap 5.1 -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
        <!-- nos script js -->
        <script src="assets/js/devinerLeNombre.js"></script>
    </body>
</html>

1- déclarer les differents sélecteurs dans des variables
2- faire disparaitre le champs
3- faire disparaitre le bouton valider
4- faire un écouteur d'évenement "click" sur le bouton Cliquer pour jouer
    5- dans la fonction d'évènement anonyme associé au click bouton :
        5-1 faire disparaitre le bouton Cliquer pour jouer
        5-2 faire apparaitre le champs input
        5-3 faire apparaitre le bouton Valider
        5-4 déclarer une variable qui va recevoir un nombre au hasard entre 1 et 100 exemple: trouveLeNombre
        5-5 faire un écouteur d'évenement "click" sur le bouton valider
            5-5-1 récupérer la valeur du champs input
            5-5-2 poser des conditions avec la valeur récupérée et la valeur à trouver:
                si(valeurinput est inférieur à trouveLeNombre) 
                    afficher c'est plus !
                    sinon si (valeurinput est supérieur à trouveLeNombre)
                        afficher c'est moins !
                sinon 
                    afficher c'est gagné !
                    guider l'utilisateur
                    rafraichir la page pour relancer le jeu