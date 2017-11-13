// objet jerome
// attribut tableau enfants
// 2 methodes :
// nouvelEnfant (nomEnfant)
// listerEnfants : affiche les noms de tous les enfants de jerome

var felix =0; //variable de type entier
var frederique=[]; // variable de type tableau vide
var jerome ={"prenom" : "jerome"}; // variable de type objet
jerome.enfants = [];  // equivalent à var jerome ={"enfants" : []};

//ajout manuel enfant à objet jerome
jerome.enfants.push ("jonas");
console.log(jerome);

//1 fonction d ajout enfant ayant pour parametre(ou argument) nomEnfant
var addChildFunc = function (nomEnfant){
	this.enfants.push (nomEnfant);
}
//2 définition de la fonction dajout enfant
jerome.ajoutEnfant = addChildFunc;
// ces deux lignes peuvent etre aussi codées en une avec la restriction que cette fonction n'est utilisable qu une fois
//jerome.ajoutEnfant = function (nomEnfant){
//	this.enfants.push (nomEnfant);
//}


// appel de la fonction
jerome.ajoutEnfant ("margot");
console.log(jerome);
//--------------------------------------------------
// fonction listerEnfants
var listChildFunc = function () {
	console.log("enfants de " + this.prenom + ":");
	for ( i=0; i <this.enfants.length; i++)
	{
		console.log("-" + this.enfants[i]);
	}
};
// definition de la fonction de liste
jerome.listeEnfant = listChildFunc;
// appel de la fonction listchild
jerome.listeEnfant ();   // equivalent à call listEnfants










