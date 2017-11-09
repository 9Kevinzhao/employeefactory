const Random = require('./Random.js');
const manager = function(){
    let id = "m-"+Random().digit(8);
    let baseSalary = (Random().discreteRangeIn(4,9)*10000);
    let workers= Random().discreteRangeIn(4,20);
    let temp = 0
function pay(){

    for(let i=0; i<workers; i++){
        while(i<10){
            temp = temp+250
        }
        temp = temp+400
    }
    let yearlypay= baseSalary+ temp
    let weeklypay = yearlypay/52
    let dailypay = weeklypay/5
    return [dailypay,weeklypay,yearlypay]

}


return{id,workers,baseSalary,}
}
module.exports = manager;


let haha = new manager
console.log(haha.id)
