//This is how you would usually do it
//var myString = 'DigitalCrafts';
//var myArray = myString.split('').reverse().join('')


// Alternate method
//Reverse string method 2

function reverse(str){
    let reverse='';
    for (let char of str){  /// FOR(LET CHAR IN STR)
        reverse = char + reverse;
    }
    return reverse;
}
// console.log (reverse('Hello'))

/// Look at how you did the palindrome thing in algorithm exercise
function palindrome(str){
    let newString = str.split('');
    if (newString.reverse().join('')== str){
        return true
    }
}

const myString =  "Digital Crafts"; 
const myCharMap = {};
let max = 0;
let maxChar = '';

for (let char of myString){
    if(!myCharMap[char]){
        myCharMap[char]=1;
    }
    else {
        myCharMap[char]++
    }
}

//console.log(myCharMap);


for (let key in myCharMap);
    if (myCharMap[key]>max){
        max = myCharMap[key];
        maxChar = key;
    }
