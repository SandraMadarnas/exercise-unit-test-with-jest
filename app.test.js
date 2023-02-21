// const { sum } = require("./app.js");

// describe("app.js" , () => {
//     test('La suma de 1 + 2 es igual a 3', () => {
//         expect(sum(1,2)).toBe(3);

// })
// })

// importar la función sum del archivo app.js
const { sum } = require('./app.js');

// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

//Test para conversión de euro a otras monedas
const { fromEuroToDollar } = require('./app.js');
test("One euro should be 1.2 dollars", function(){
    expect(fromEuroToDollar(2.5)).toBe(3);
    const result = typeof(fromEuroToDollar) ==='function';
    expect(result ).toBe(true);
    const number = !isNaN(fromEuroToDollar(2.5));
    expect(number).toBe(true)
    
});