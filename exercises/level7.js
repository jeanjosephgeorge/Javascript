// Write a function that takes a number as an input. 
// Have it create an empty array and then push a string into the array as many 
// times as the input number
//
// Name the function "finalFunction"

function finalFunction(num) {
    var myArray = [];
    
    while (myArray.length < num) {
        myArray.push("string");
    }
    console.log (myArray);
}

finalFunction(3);