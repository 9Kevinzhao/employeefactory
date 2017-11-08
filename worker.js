const Random = require('./Random.js');

const worker = function(){
  let id = "w-"+Random().digit(8);
  let wage = Random().discreteRangeIn(8,50);;
  let hours = (Random().discreteRangeIn(4,7)*5);

  function pay(){
    let array=[dailypay,weeklypay,yearlypay]
    let dailypay = hours*wage/5
    let weeklypay = hours*wage
    let yearlypay = hours*52
  }
return{id,wage,hours}
}
let haha=new worker
console.log(haha.id)
