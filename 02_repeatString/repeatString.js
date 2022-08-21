const repeatString = function(string, num) {
    let stringTimes = "";
    for (i = 0; i < num; i++) {
        stringTimes = stringTimes + string;
    }
    return stringTimes;
};

// Do not edit below this line
module.exports = repeatString;
