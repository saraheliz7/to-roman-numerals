const expect = require("chai").expect;
const convert = require("../src/to-roman-numerals");

describe("Roman Numeral Converter", function () {

    it("should change a number to a letter", function() {
        expect(convert(1)).to.equal("I");
    });

    it("should change 2 to a II", function() {
        expect(convert(2)).to.equal("II");
    });

    it("should change 3 to a III", function() {
        expect(convert(3)).to.equal("III");
    });

    it("should change 12", function() {
        expect(convert(12)).to.equal("XII");
    });


});