
var buttonElement = document.getElementById('addElem');
var Ullista = document.getElementById('Lista');
console.log(Ullista);
//var b = prompt('Podaj liczbę elementów do utworzenia');
var i =0;

/*function createElements () {
	
		for (var i = 1; i <=b; i++) {

			var newLi = document.createElement('li');
			newLi.innerHTML = 'item ' +i;
			console.log(newLi);
			Ullista.appendChild(newLi);
	}
}*/

/*Kondrad's method*/

function createElements () {
	i +=1;
	var newLi = document.createElement('li');
	newLi.innerHTML = 'item ' +i;
	console.log(newLi);
	Ullista.appendChild(newLi);
}

buttonElement.addEventListener('click', function(e){
	console.log('Kliknięto button');
	createElements();
});