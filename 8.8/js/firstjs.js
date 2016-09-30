
var buttonElement = document.getElementById('addElem');
var Ullista = document.getElementById('Lista');
console.log(Ullista);

function createElements () {
	
		for (var i = 1; i <=2; i++) {

			var newLi = document.createElement('li');
			newLi.innerHTML = 'item ' +i;
			console.log(newLi);
			Ullista.appendChild(newLi);
	}
}

buttonElement.addEventListener('click', function(e){
	console.log('Kliknięto button');
	createElements();
});