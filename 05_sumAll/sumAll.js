const sumAll = function(num1, num2) {
    // CHECK IF ARGUMENTS ARE POSITIVE AND TRUE NUMBERS BEFORE ANY MATH
    if (num1 < 0 || num2 < 0 || typeof(num1) !== "number" || typeof(num2) !== "number"){
        return "ERROR";
    } else {
        let total = 0;
        
        //COMPARE NUM1 VS NUM2 TO DETERMINE DIRECTION OF INCREMENT
        if (num1 <= num2) {
            for (i = num1; i <= num2; i++) {
                total += i;
            }
        } else {
            for (i = num1; i >= num2; i--) {
                total += i;
            }
        }
        return total;
    }
}

// Do not edit below this line
module.exports = sumAll;
