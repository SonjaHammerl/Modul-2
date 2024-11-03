const expect = require('chai').expect;

//Sample JUnit test
function sum(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
}

describe('#sum()', function () {

    //  if needed logic before each test run
    beforeEach(function () {

    })

    // test a functionality
    it('should add numbers', function () {
        expect(sum([1, 2, 3, 4, 5])).to.equal(15);
    })

    // Testet ob die Funktion für ein leeres Array korrekt 0 zurückgibt
    it('sollte 0 für ein leeres Array ausgeben', function () {
        expect(sum([])).to.equal(0);
    });

     // Testet, ob ein Array mit nur einem Element den Wert dieses Elements zurückgibt
     it('sollte das einzige Element ausgeben falls nur ein Element vorhanden ist', function () {
        expect(sum([2])).to.equal(2);
    });

    // Testet, ob die Funktion mit negativen Zahlen umgehen kann
    it('sollte negative Zahlen korrekt zusammen zählen können', function () {
        expect(sum([-10, -2, -3])).to.equal(-15);
    });


});