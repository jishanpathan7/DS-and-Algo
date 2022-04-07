
function validateIpAddress(str) {
    var ip = str.split('.');
    if (ip.length != 4) {
        return false;
    }
    for (var i = 0; i < ip.length; i++) {
        if (ip[i] == '' || isNaN(ip[i]) || ip[i] < 0 || ip[i] > 255) {
            return false;
        }
    }
    return true;
}