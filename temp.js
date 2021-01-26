var input='ABC'
var values = 'ABCD123'
var holes='1201000'

var sum = 0

for (var i=0; i<input.length; i++){
	var index = values.indexOf(input[i]);
	sum += parseInt(holes[index]);
}

console.log(sum);

var hex = sum.toString(16);
console.log(`hex is ${hex}`);

for(var i=0; i< hex.length; i++){
 var index = values.indexOf(hex[i]);
 sum += parseInt(holes[index]);
}

console.log(`final sum is ${sum}`);
