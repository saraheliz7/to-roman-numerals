const convert = (number) => {
    let romanNumeral = ""

    const cAmount = Math.floor(number / 100);
    const cRemainder = number % 100;

    const xcAmount = Math.floor(cRemainder / 90);
    const xcRemainder = cRemainder % 90;

    const lAmount = Math.floor(xcRemainder / 50);
    const lRemainder = xcRemainder % 50;

    const xlAmount = Math.floor(lRemainder / 40);
    const xlRemainder = lRemainder % 40;

    const xAmount = Math.floor(xlRemainder / 10);
    const xRemainder = xlRemainder % 10;

    const ixAmount = Math.floor(xRemainder / 9);
    const ixRemainder = xRemainder % 9;

    const vAmount = Math.floor(ixRemainder / 5);
    const vRemainder = ixRemainder % 5;

    const ivAmount = Math.floor(vRemainder / 4);
    const ivRemainder = vRemainder % 4;


    for(let c = cAmount; c > 0; c--) {
        romanNumeral += "C";
    }
    for(let xc = xcAmount; xc > 0; xc--) {
        romanNumeral += "XC";
    }
    for(let l = lAmount; l > 0; l--) {
        romanNumeral += "L";
    }
    for(let xl = xlAmount; xl > 0; xl--) {
        romanNumeral += "XL";
    }
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
