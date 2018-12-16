var greet = function (name){
    return 'hello '+name;
}



//console.log(greet('Jean'))

// This is an anonymous function
// It's assigned to a variable
// This enables to pass it into other functions

var add = function(num1,num2){
    return (num1+num2);
}

var subtract = function (num1,num2){
    return num1-num2;
}


var calc = function (num1, num2, operation){
    
    return operation(num1,num2);
}
//console.log (calc(3,4,subtract))

var arr = [4,7,2,3,3,7];
var i=0;

// arr.forEach(function(value,index){
// console.log(value+' '+index);
// })


// var newArray = arr.map(function(value){
//     return value*2;
// })
// console.log(newArray)


// var newArray = arr.filter(function(value){
//     return value > 3; // Return if value is greater than 3
// })
// console.log(newArray);

// var result = arr.some(function(value){
//     console.log(value);
//     return value<0;
// })

// console.log(result);

var arr = ['very','important','person'];

function acronym(arr){
var p = arr.reduce(function(accumulator,currentValue){
    return (accumulator+currentValue[0]).toUpperCase()
},"");
return p;
}

var x = function(a,b){return a*b};