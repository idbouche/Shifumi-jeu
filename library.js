var reponse;

var numbre;

var nombreAleatoire = function(){
        return (Math.round(Math.random() * 2)) + 1;
}

var repondre = function(){

    numbre = window.document.getElementById("nombre").value;

    var inputs = window.document.getElementsByName('reponse');
    for(i=0; inputs[i] ;i++){
        if(inputs[i].checked){
            reponse = inputs[i].value;
            console.log(reponse)
        };
    }
    console.log(numbre)
    tour(numbre);
};


var resultat = function(txt){
    //window.document.getElementById('resultat').textContent = txt;

      var monDiv = document.getElementById('resultat');
      monDiv.innerHTML = txt;
}







