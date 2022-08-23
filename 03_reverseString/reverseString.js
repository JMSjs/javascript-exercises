const reverseString = function(string) {
    let reversedString = "";
    for (i = string.length; i >= 0; i--) {
        let letter = string.charAt(i);
        reversedString = reversedString + letter;
    
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
