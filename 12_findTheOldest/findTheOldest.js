const findTheOldest = function(arr) {
   return arr.reduce((prevObj, currObj) => { 
        let prevObjAge = getAge(prevObj.yearOfBirth, prevObj.yearOfDeath);
        let currObjAge = getAge(currObj.yearOfBirth, currObj.yearOfDeath);
        console.log(prevObjAge + "vs" + currObjAge);
        return prevObjAge < currObjAge 
            ? currObj
            : prevObj;
    })
};
    
function getAge(birthYear, deathYear) {
    if (!deathYear) {
        deathYear = new Date().getFullYear();
    }
    return deathYear - birthYear;
}

// Do not edit below this line
module.exports = findTheOldest;
