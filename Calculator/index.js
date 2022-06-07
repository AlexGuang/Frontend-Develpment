var salasuper = 0;
var newSala;
var i = 0;

function calculator(salasuper) {
    i++;
    if (i === 31) {
        return salasuper;
    } else {
        return calculator((salasuper + 10000) * 1.05);
    }


}
console.log(calculator(salasuper));