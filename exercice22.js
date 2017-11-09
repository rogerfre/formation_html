console.log("info du fichier js ");

var a = 2;
var b = 3;
var somme = a+b;
console.log(somme);
console.log(a*b);

var client ={"prenom": "frederique", "lunettes": true, "type":2};
console.log(client);
console.log(client.prenom);
console.log(client["prenom"]);

var prenom = client.prenom;
console.log(prenom);

if ( client.lunettes == true)
{
	console.log("avec des lunettes");
}	
else{
	console.log("sans lunette");
}

switch (client.type){
	case 0:
		console.log("ceci est un prospect");
		break;
	case 1:
		console.log("ceci est un client");
		break;	
	case 2:
		console.log("ceci est un VIP");
		break;
	case 3:
		console.log("ceci est un ex-client");
		break;		
}
console.log("a"+"b");

var i=0;
while(i<=10)
{
	console.log("j en suis a " + i);
	i=i+1;
}

var j=0;
j++; //equivaut a j=j+1
console.log(j);
console.log(j++);
console.log(++j)
console.log("==");
j--;
console.log(j);
console.log("j="+j);
console.log(j++);
console.log("j="+j);
j+=2;  // j=j+2
console.log(j);
j-=5;
console.log(j);
j*=10;
console.log(j);

j=10;
do {
	console.log(j++);
	}
while(j < 10);
console.log(j);

for (var i=0; i < 10; i++)
{
	console.log("i=" + i);
}

for (var i=10; i > 0; i--)
{
	console.log("i=" + i);
}











