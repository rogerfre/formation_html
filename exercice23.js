// variables globales
var test=22;

// fonction
function bonjour() {
	console.log(test);
	console.log("bonjour");
}
// fonction avec parametre
function bonjourPrenom(prenom) {
	console.log("bonjour "+prenom);	
}
function bonjour2(){
	console.log("bonjour");
	// variable locale car dans une fonction
	//var nom="test test";
	bonjourPrenom("toto")
};
var affsomme = function(a,b){
	console.log(a+b);
};

// Programme principal appel des fonctions
bonjour();
bonjourPrenom("frederique");
bonjour2();
affsomme(1,2);
console.log(test);
//console.log(nom); //comme la variable n'est pas définie cela genere une erreur a tester en retirant // ici et dans la déficnition de la fonction

//déclaration d une variable de type fonction
var affPrenom =function(){
	//la fonction affiche dans la console lattribut premon (this. permet de récupérer la valeur de lobjet traité
	console.log(this.prenom);
}
//declaration dune variable de type objet ayant un attribut prenom
var frederique ={"prenom": "frederique"};
//definition de lattribut affichePrenom de lobjet frederique
//cet attribut est définit par la variable de type fonction
frederique.affichePrenom = affPrenom;

var felix ={"prenom": "felix"};
felix.affichePrenom = affPrenom;
felix.age=32;

// appel de la methode affichePrenom pour l'objet felix
felix.affichePrenom();
// pour objet frederique
frederique.affichePrenom();

var x="bonjour";
console.log(x);
console.log(x.toUpperCase());

var y="tioto";
if  (y=="toto")
{
	console.log(y.toUpperCase());
}
else
{
	console.log(y);
}
//avoir un argument boolean qui permet dindiquer si on souhaite afficher le prenom en majuscule
//définition de la variable de type fonction
var affPrenomMaj = function(isUpperCase){
	// isUpperCase = true ou false
	if  ( isUpperCase == true)
	{
		console.log(this.prenom.toUpperCase());
	}
	else
	{
		console.log(this.prenom);
	}
}

felix.affMajPrenom = affPrenomMaj;
felix.affMajPrenom (true);
felix.affMajPrenom (false);

//exercice :creer une methode isMajeur
//qui va recuper l age de mon objet et renvoyer true ou false en fonction de l age

// etape1 creation de la variable isMajeurFunc de type fonction
var isMajeurFunc= function (){
	if (this.age >= 18)
		return true;
	else
		return false;	
}
//Etape 2 definition de l attribut isMajeur comme lien entre objet felix et la variable isMajeurFunc de type focntion
// pour appel en direct
// et avec accès à toutes les propriete de lobjet felix
felix.isMajeur = isMajeurFunc;
//Etape 3 appel de la methode isMajeur de lobjet felix
if (felix.isMajeur())
{
	console.log("PASSER");	
}
else
{
	console.log("REFUSER");	
}













