const Random = require('./Random.js');
const contractor = function(){
    let id = "c-"+Random().digit(8);
    let startDate = "YYYY/MM/DD"
    let endDate = "YYYY/MM/DD"
    function pay(){
        return Random.discreteRangeIn(500,9000)
    }

}
module.exports = contractor;
