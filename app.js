const sum = (a,b) => {
    return a + b;
}

// just a console log for ourselves.
console.log(sum(7,3))


const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    // convert the given valueInDollar to Yen
    let valueInYen = valueInDollar * 106.583;
    //return the Yen value
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    // convert the given valueInYen to Pound
    let valueInPound = valueInYen * 0.0062548866301798;
    //return the Pound value
    return valueInPound;
}



// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen,  fromYenToPound};