console.log("Hello World")
// ************************************************************ //
//  Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Registro en consola para nosotros.
console.log(sum(7,3))

//  exporta la función para usarla en otros archivos 
//  (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum };
// ************************************************************ //

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
// EUR (Euro) = 1.2 USD (US Dollar)

const fromDollarToEuro = (dollars) => dollars / oneEuroIs.USD;
console.log(fromDollarToEuro(1.2));


const fromDollarToYen = (dollars) => {
    const euros = fromDollarToEuro(dollars);
    return oneEuroIs.JPY * euros;
}
console.log(fromDollarToYen(1));


const fromEuroToDollar = (euros) =>{
    return euros * oneEuroIs.USD;
}
console.log(fromEuroToDollar(1));


const fromYenToPound = (yen) =>{
    const euroJPY = yen / oneEuroIs.JPY;
    return euroJPY * oneEuroIs.GBP;
};
console.log(fromYenToPound(1));


module.exports = { sum, fromEuroToDollar }