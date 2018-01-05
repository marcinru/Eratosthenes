var getPrimes = require('../app/getPrimesModule');

describe('getPrimes', function() {
    it('should return empty string for N = 0', function() {
        expect(getPrimes(0)).toBe('');
    });

    it('should return 2 for N = 3', function() {
        expect(getPrimes(3)).toBe('2');
    });

    it('should return "2, 3, 5, 7" for N = 10', function() {
        expect(getPrimes(10)).toBe('2, 3, 5, 7');
    });
});