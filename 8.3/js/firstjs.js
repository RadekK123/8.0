
var a = prompt('Podaj wartość liczbową a');
var b = prompt('Podaj wartość liczbową b');
var value = (a*a) + (2 * a * b) - (b * b);

console.log('Wynik wynosi ' + value);
var isPositive;

//var isPositive = value >= 0 ? console.log('Wynik jest dodatni') : console.log('Wynik jest ujemny');

if (value > 0) {
	console.log ('Liczba ma wartość dodatnią');
} else if (value === 0) {
	console.log ('Liczba ma wartość zero');
} else {
	console.log ('Liczba ma wartość ujemną');
}
