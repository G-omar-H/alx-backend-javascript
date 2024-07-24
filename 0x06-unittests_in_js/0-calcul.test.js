var assert = require('assert');
var calculateNumber = require('./0-calcul');

describe('test round', function() {
    it('check equality', function() {
        assert.equal(calculateNumber(1, 3), 4);
        assert.equal(calculateNumber(1, 3.7), 5);
        assert.equal(calculateNumber(1.2, 3.7), 5);
        assert.equal(calculateNumber(1.5, 3.7), 6);
    });
});
