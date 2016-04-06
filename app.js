var score = 0;
var scorepc = 0;
var scoreFinalle = 0;

var tour = function(arg){
    scoreFinalle++;
    var tab = [ "pierre", "feuille", "ciseaux" ];
    var pc = nombreAleatoire();

    var egaliti;

    if (tab[pc-1] != reponse){

        if (tab[pc-1] == "pierre" && reponse == "ciseaux" || tab[pc-1] == "ciseaux" && reponse == "feuille" || tab[pc-1] == "feuille" && reponse == "pierre"){

            scorepc++;
            egaliti = "vous avez perdu";

        }else {

            score++;
            egaliti = "vous avez gagné";
        }
    }else {

        egaliti = "égalité";

    }

    resultat("<p>vous avez choisi ciseaux "+reponse+" et l'ordinateur choisi " + tab[pc-1] +"</p> <h2> Ton score : " +score+ "<br>Score pc : " +scorepc+ "</h2><br><h1>" + egaliti + "</h1>");
    console.log(scoreFinalle);
    if (scoreFinalle === arg){
        if(score > scorepc){
            resultat("  vous avez gagné: <h2 style = 'color:red'> Ton score : " +score+ "</h2>");
            nombrembre.value="";
        }else{
            resultat(" vous avez perdu : <h2 style = 'color:green'> score pc : " +scorepc+ "</h2>");
            nombre.value="";
        }

    }
}

var jeu = function(){

    }
