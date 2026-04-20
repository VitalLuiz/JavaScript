var stringnumber = null;
var i = 0
var i2 = 0
var soma = 0

function somaalg(n){
    stringnumber = toString(n)
    while(stringnumber.length != 1){
        while(i2 < stringnumber.length){
            soma += parseInt(stringnumber.charAt(i2))
            i2++
        }
        stringnumber = toString(soma)
    }
    return stringnumber
}
console.log(somaalg(120))