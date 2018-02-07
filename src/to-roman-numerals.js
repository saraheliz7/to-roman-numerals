const convert = (number) => {
    let romanNumeral = ""

    const xAmount = Math.floor(number / 10);
    const xRemainder = number % 10;

    const ixAmount = Math.floor(xRemainder / 9);
    const ixRemainder = xRemainder % 9;

    const vAmount = Math.floor(ixRemainder / 5);
    const vRemainder = ixRemainder % 5;

    const ivAmount = Math.floor(vRemainder / 4);
    const ivRemainder = vRemainder % 4;


    for(let x = xAmount; x > 0; x--) {
        romanNumeral += "X";
    }
    for(let ix = ixAmount; ix > 0; ix--) {
        romanNumeral += "IX";
    }
    for(let v = vAmount; v > 0; v--) {
        romanNumeral += "V";
    }
    for(let iv = ivAmount; iv > 0; iv--) {
        romanNumeral += "IV";
    }
    for(let i = ivRemainder; i > 0; i--) {
        romanNumeral += "I";
    }

    return romanNumeral;
}

module.exports = convert;
