document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('N').addEventListener('keyup', function() {
        var n = this.value;
        document.getElementById('result').value = getPrimes(n);
    });
});