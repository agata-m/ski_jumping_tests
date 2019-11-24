const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
    
    describe('should calculate points for normal hillsize', () => {
        it('should return correct points when k point is met', () => {
            const actual = calculateDistancePoints(111, 109, 98);
            const expected = 86;
            assert.equal(actual, expected);
        });

        it('should return correct points when k point is not met', () => {
            const actual = calculateDistancePoints(85.5, 109, 98);
            const expected =  35;
            assert.equal(actual, expected);
        });
    });

    describe('should calculate points for big hillsize', () => {
        it('should return correct points when k point is met', () => {
            const actual = calculateDistancePoints(134, 134, 120);
            const expected = 85.2;
            assert.equal(actual, expected);
        });

        it('should return correct points when k point is not met', () => {
            const actual = calculateDistancePoints(107.5, 134, 120);
            const expected =  37.5;
            assert.equal(actual, expected);
        });
    });

    describe('should calculate points for mammoth hillsize', () => {
        it('should return correct points when k point is met', () => {
            const actual = calculateDistancePoints(227.5, 225, 200);
            const expected = 153;
            assert.equal(actual, expected);
        });

        it('should return correct points when k point is not met', () => {
            const actual = calculateDistancePoints(144, 225, 200);
            const expected =  52.8;
            assert.equal(actual, expected);
        });
    });

});