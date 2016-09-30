function getTriangleArea (a, h) {
	
	if (a > 0 && h > 0) {
		console.log('Podane wartości są prawidłowe');
		var value = (a * h) / 2;
	} else {
		console.log('Podane wartości są nieprawidłowe');
	}
		return value;
}

var getTriangle2Area = function (a, h) {

	if (a > 0 && h > 0) {
		console.log('Podane wartości są prawidłowe');
		var value = (a * h) / 2;
	} else {
		console.log('Podane wartości są nieprawidłowe');
	}
		return value;
};

var Triangle3 = function getTriangle3Area (a, h) {

	if (a > 0 && h > 0) {
		console.log('Podane wartości są prawidłowe');
		var value = (a * h) / 2;
	} else {
		console.log('Podane wartości są nieprawidłowe');
	}
		return value;
};

console.log(getTriangleArea(2,2));
console.log(getTriangle2Area(3,3));
console.log(Triangle3(4,4));

/*var AreaTriAngle1 = getTriangleArea(3,3);
var AreaTriAngle2 = getTriangle2Area(4,4);
var AreaTriAngle3 = Triangle3(5,5);

console.log(AreaTriAngle1);
console.log(AreaTriAngle2);
console.log(AreaTriAngle3);*/


