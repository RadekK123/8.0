
function drawTree (a){

	for(var i =1; i <= a; i++) {
		var star= '';
		
		for(var b = 1; b <= (i*2)-1; b++){
			star+='*';
		}
	console.log(star);
	}
	
}
drawTree(10);