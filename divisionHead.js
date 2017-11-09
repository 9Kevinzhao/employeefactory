const Random = require('./Random.js');
const divisionHead = function(){
	let id = "d-"+Random().digit(8);
	let managers=Random().discreteRangeIn(1,10);
	let workers=Random().discreteRangeIn(20,300);
	let baseSalary=Random().discreteRangeIn(2,5)*50000;
	function pay(){
	let temp = (managers*10000+workers*50)*Math.log(workers);
	let yearlypay= baseSalary+ temp
	let weeklypay = yearlypay/52
	let dailypay = weeklypay/5
	return [dailypay,weeklypay,yearlypay]
}
return{id,workers,baseSalary}
}
module.exports = divisionHead;

let haha = new divisionHead;
console.log(haha.id)
