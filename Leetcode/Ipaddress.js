//Validate IP address
// Validate an IP address (IPv4). An address is valid if and only if it is in the form "X.X.X.X", 
// where each X is a number from 0 to 255.
//For example, "12.34.5.6", "0.23.25.0", and "255.255.255.255" are valid IP addresses, 
// while "12.34.56.oops", "1.2.3.4.5", and "123.235.153.425" are invalid IP addresses.
// Language: javascript
//Input:
// "192.168.0.1"
//Output:
// true
//Input:
// "192.168.123.456"
//Output:
// false

function validateIP(ip) {
    let ipArr = ip.split('.');
    if(ipArr.length !== 4){
        return false;
    }
    for(let i = 0; i < ipArr.length; i++){
        if(ipArr[i] === '' || ipArr[i] === ' '){
            return false;
        }
        if(Number(ipArr[i]) < 0 || Number(ipArr[i]) > 255){
            return false;
        }
    }
    return true;
}
console.log(validateIP('0.0.0.0'));

//Time complexity: O(n)
//Space complexity: O(1)
