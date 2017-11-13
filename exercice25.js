var tabEntier = [1, 2, 3]
// en js les indices commencent à 0
console.log(tabEntier[0]);

// taille d un tableau (array)
console.log(tabEntier.length);

// initialisation variable somme
var somme=0;
// afficher la somme de toutes les valeurs du tableau
for (i=0;i< tabEntier.length;i++)
{
	//somme = somme + tabEntier[i]; est équivalent à l instruction suivante
	somme += tabEntier[i];
}	
console.log("la somme du tableau = "+somme);

//gestion des tableaux de caracteres
//affichage ordre inverse
var tabChar = ["jean","paul","eric"];
console.log("tabChar: ");
for (var i= tabChar.length -1 ; i >= 0; i--)
{
		console.log("- " + tabChar[i]);
}