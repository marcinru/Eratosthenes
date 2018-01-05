if (typeof module === 'object') {
    var sieveOfErathosthenes = require('sieve-of-eratosthenes');
}

function getPrimes(n) {
    var primes = sieveOfErathosthenes(n);
    return primes.join(', ');
}

if (typeof module === 'object') {
    module.exports = getPrimes;
}