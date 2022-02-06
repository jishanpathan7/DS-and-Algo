//program to find the prime numbers in a given range


function primeInRange(n) {
    var prime = [];
    var i = 2;
    while (i <= n) {
        if (isPrime(i)) {
            prime.push(i);
        }
        i++;
    }
    return prime;
}
console.log(primeInRange(10));

function isPrime(n) {
    var i = 2;
    while (i <= Math.sqrt(n)) {
        if (n % i == 0) {
            return false;
        }
        i++;
    }
    return true;
}