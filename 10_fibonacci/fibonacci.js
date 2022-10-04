const fibonacci = function(position) {
    if (position <0) {
        return "OOPS";
    }
    let numBefore = 0;
    let numCurr = 0;
    let total = 0;
    for (i = 1; i <= parseInt(position); i++){
        total = numCurr + numBefore;    //first, calculate sum of current positions
        numBefore = numCurr;            //second, make previous number the current number
        numCurr = total;                //third, make the total the new current number
        if (numCurr === 0)  {numCurr=1} //bypasses the 1st iteration so it starts with "1"
    }
    return numCurr;
};

// Do not edit below this line
module.exports = fibonacci;
