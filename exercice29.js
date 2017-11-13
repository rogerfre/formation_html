//notaion HTML5 query selectors
var monP = document.querySelector("#p1");  //# car ID
console.log(monP);

var mesPPair = document.querySelectorAll(".pair");  // . car class
console.log(mesPPair);

var mesP = document.querySelectorAll("p");
console.log(mesP);

//recuperation du premier enfant
var firstChild = document
					.querySelector("#p1")
					.firstChild;
console.log("1er enfant : " + firstChild.nodeName);

//changement du contenu
function changeContenu()
{
	var p1 = document.querySelector("#p1");
	p1.textContent = "Bienvenue";
}
//a chaque clic sur le second bouton on ajoute
//ou supprime la classe "hidden" à notre images

document.querySelector("#bouton2").onclick=function()
{
	document.querySelector("img").className="hidden";
};









