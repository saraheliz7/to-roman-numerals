const convert = (number) => {
    let romanNumeral = "";
    const numerals = [1000, 500, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const romans = ["M", "D", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    for(let i = 0; i < numerals.length; i++) {
        while(number >= numerals[i]) {
            romanNumeral += romans[i];
            number -= numerals[i];
        }
    }
    return romanNumeral;
};

module.exports = convert;
