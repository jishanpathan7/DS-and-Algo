//given a number n , Print Yes if it is a power of 2 else print No.
function power(n) {
    if (n === 1) {
        return 'Yes';
    }
    if (n % 2 === 0) {
        return power(n / 2);
    }
    return 'No';
}