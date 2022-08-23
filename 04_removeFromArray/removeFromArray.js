const removeFromArray = function (array, ...thingsToRemove) {
//     const result = [];
//     array.forEach(thingInArray => {
//         if (!thingsToRemove.includes(thingInArray)) {
//         result.push(thingInArray);
//       }
//     });
//     return result;
//   };
//
// 
//////////////////////////////
// Trying out Filter array method
//////////////////////////////
    return array.filter(thingInArray => !thingsToRemove.includes(thingInArray)); 
}
// Do not edit below this line
module.exports = removeFromArray;
