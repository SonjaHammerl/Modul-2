const expect = require('chai').expect;
const apiTemperature = require('../public/js/auxiliaryAPI')

//TODO Unit Tests to implement
describe("fahrenheitToCelsius()", function(){
    it('test below 32', function(){
        expect(Math.round(apiTemperature.fahrenheitToCelcius(30)*10)/10).to.equal(-1.1)
    })
    it('test over 32', function(){
        expect(Math.round(apiTemperature.fahrenheitToCelcius(30)*10)/10).to.equal(-1.1)
    })
    it('test equal 32', function(){
        expect(Math.round(apiTemperature.fahrenheitToCelcius(30)*10)/10).to.equal(-1.1)
    })
    
});

describe("celciusToFahrenheit()", function(){
    it('test below 32', function(){
        expect(Math.round(apiTemperature.celsiusToFahrenheit(30)*10)/10).to.equal(86)
    })
    it('test over 32', function(){
        expect(Math.round(apiTemperature.celsiusToFahrenheit(30)*10)/10).to.equal(86)
    })
    it('test equal 32', function(){
        expect(Math.round(apiTemperature.celsiusToFahrenheit(30)*10)/10).to.equal(86)
    })
});

describe("getGreetingDependOnTime()", function(){
    it('test Guten Morgen', function(){
        expect(apiTemperature.getGreetingDependOnTime(new Date('2024-11-04 9:00'))).to.equal("Guten Morgen")
    })
    it('test Guten Abend', function(){
        expect(apiTemperature.getGreetingDependOnTime(new Date('2024-11-04 19:00'))).to.equal("Guten Abend")
    })
});