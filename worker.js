const Random = require('./Random.js');

const worker = function(){
  let id = "w-"+Random().digit(8);
  let workers = Random().discreteRangeIn(4,20);;
  let baseSalary = (Random().discreteRangeIn(4,7)*5);

  function pay(){

  }
return{id,workers,baseSalary}
}
