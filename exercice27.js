//message au format JSON
//javascript object notaion
var message = '{"nom":"felix"}';

console.log(message);
console.log(message.nom); //indéfini

var utilisateur = JSON.parse(message);
console.log(utilisateur);
console.log(utilisateur.nom);

utilisateur.age=32;
console.log(utilisateur); // au format JS

var messageAEnvoyer = JSON.stringify(utilisateur);
console.log(messageAEnvoyer); //au format string JSON