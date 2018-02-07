const convert = (number) => {
    let romanNumeral = ""

    const xAmount = Math.floor(number / 10);
    const xRemainder = number % 10;


    for(let x = xAmount; x > 0; x--) {
        romanNumeral += "X";
    }
    for(let i = xRemainder; i > 0; i--) {
        romanNumeral += "I";
    }

    return romanNumeral;
}

module.exports = convert;
