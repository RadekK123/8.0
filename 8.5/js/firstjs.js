
var nameMen = ['Daniel','Marek','Maciej','Bartek','Dawid'];
var nameWomen = ['Asia','Zosia','Kasia','Marta','Magda'];

var nameTogether = nameMen.concat(nameWomen);
console.log(nameTogether);

var newName = 'Asia';

if (nameTogether.indexOf(newName) === -1) {
	nameTogether.push(newName);
} else {
	console.log('Podane imię już istnieje, wymyśl coś innego');
}

console.log(nameTogether);