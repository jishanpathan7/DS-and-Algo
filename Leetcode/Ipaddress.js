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
	/**
	@param ip: string
	@return: boolean
	*/

	// your code goes here

  const inputAsArray = ip.split('.');
  
  if(inputAsArray.length === 4) {
    for(let segment of inputAsArray) {
      if(!segment) return false;
      
      if(isNaN(+segment)) {
        return false;
      }
      
      if(!(+segment >= 0 && +segment <= 255)) 
        return false; 
      
      if(!isDigits(segment)) return false; 
    };
    
    return true;
  }
  
  return false;
}

const isDigits = (segment) => {
  for(let i = 0; i < segment.length; i++) {
    if(isNaN(+segment[i])) return false;
  }
  
  return true;
}
