const assert = require('chai').assert;
const expect = require('chai').expect;
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;
const add = require('../app').add;

sayHelloResult = sayHello();
addNumbersResult = addNumbers(5,5);

describe('App', function () {
    describe('sayHello()', function () {
        it('sayHello should return hello', function () {
            assert.equal(sayHelloResult, 'hello');
        })
    
        it('sayHello should return type string', function () {
            assert.typeOf(sayHelloResult, 'string');
        })
    })
  
    describe('addNumbers()', function() {
        it('addNumbers should be above 5', function () {
            assert.isAbove(addNumbersResult,5);
        })
    
        it('addNUmber should return type number', function () {
            assert.typeOf(addNumbersResult,'number');
        })
    })    
})


describe('calculator()', function() {
    describe('add Method()', function() {
        it('when sending an empty string Should return 0', function() {
            let result = add('');
            expect(result).to.equal(0)
        })

        it('when sending a string with only sinlge number Should return the number as integer',
            function() {
                let result = add('5');
                expect(result).to.equal(5);
        })

        it('when sending a string with 2 number separate by , Should return the sum of the two numbers',
            function() {
                let result = add('2,3');
                expect(result).to.equal(5);
        })

        it('when sending a string with 5 number separate by , Should return the sum of the 5 numbers',
            function() {
                let result = add('2,3,4,5,6');
                expect(result).to.equal(20);
        })

        it('when sending a string with numbers separated by , or new line Should return the sum of the all numbers',
            function() {
                const result = add("1,\n2,3,4,5");
                expect(result).to.equal(15);
        })
    })
})