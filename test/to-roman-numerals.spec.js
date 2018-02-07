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

    it("should change 12 to XII", function() {
        expect(convert(12)).to.equal("XII");
    });

    it("should change 15 to XV", function() {
        expect(convert(15)).to.equal("XV");
    });

    it("should change 14 to XIV", function() {
        expect(convert(14)).to.equal("XIV");
    });

    it("should change 19 to XIV", function() {
        expect(convert(19)).to.equal("XIX");
    });

    it("should change 40 to XL", function() {
        expect(convert(40)).to.equal("XL");
    });

    it("should change 50 to L", function() {
        expect(convert(50)).to.equal("L");
    });

    it("should change 90 to XC", function() {
        expect(convert(90)).to.equal("XC");
    });

    it("should change 100 to C", function() {
        expect(convert(100)).to.equal("C");
    });

    it("should change 500 to D", function() {
        expect(convert(500)).to.equal("D");
    });

    it("should change 1000 to M", function() {
        expect(convert(1000)).to.equal("M");
    });


});