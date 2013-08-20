var passOne = function() {
	var array_1 = [1,2,3];
	return array_1;
};

var passTwo = function(number) {
	var array_2 = [4,5,6];
	return number + array_2;
};

console.log(passOne());
console.log(passTwo(passOne()));

