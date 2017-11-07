const Random = require('./Random.js');
const divisionHead = function(){
	let id = "d-"+Random().digit(8);
	let managers=Random().discreteRangeIn(1,10);
	let workers=Random().discreteRangeIn(20,300);
	let baseSalary=Random().discreteRangeIn(2,5)*50000;
	function pay(){
	return (managers*10000+workers*50)*Math.log(workers);
}	
}
