var assert = require('assert');
const {it, describe} = require('mocha');
var calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
    it('should return the sum of rounded numbers', function() {
        assert.equal(calculateNumber(1, 3), 4);
        assert.equal(calculateNumber(1, 3.7), 5);
        assert.equal(calculateNumber(1.2, 3.7), 5);
        assert.equal(calculateNumber(1.5, 3.7), 6);
    });

    it('should handle negative numbers', function() {
        assert.equal(calculateNumber(-1.2, -3.7), -5);
        assert.equal(calculateNumber(-1.5, -3.7), -5);
        assert.equal(calculateNumber(-1.5, 3.7), 3);
    });

    it('should handle zero', function() {
        assert.equal(calculateNumber(0, 0), 0);
        assert.equal(calculateNumber(0.4, 0.4), 0);
        assert.equal(calculateNumber(0.5, 0.5), 2);
    });
});
