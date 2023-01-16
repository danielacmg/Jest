// import the function sum from the app.js file
const { sum, fromDollarToYen,  fromYenToPound } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})


//////////////////Testing Homework functions////////////////////

// Testing fromDollarToYen,  fromYenToPound
test('converting $1 to Yen', () => {
    //const { fromDollarToYen } = require('./app.js');
    let totalYen = fromDollarToYen(12);

    // we expect the Yen to be ...
    expect(totalYen).toBe(1278.996);
});

// Testing fromYenToPound
test('Converting 1Y to Pound', () => {
    //inside the test we call our function
    let totalPound = fromYenToPound(250);

    // we expect the Pound to be ...
    expect(totalPound).toBe(1.56372165754495);
});