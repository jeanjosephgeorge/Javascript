function lvl6exercise1(num) {
	// Return 'hello' if num is 1, 'world' if num is 2, otherwise return'bye'
	switch (num) {
        case 1:
            console.log("hello")
            break;
        case 2:
            console.log("world")
            break;
        default:
            console.log("bye")
            break;
    }
}
// Uncomment below line to run
// lvl6exercise1(0)

function lvl6exercise2() {
	// Push 10 "hello" strings into the array using a for loop, then return it
    var array = [];
    for(var x=1; x<=10; x++){
        array.push("hello")
    }
console.log(array)
}
//lvl6exercise2()

function lvl6exercise3() {
	// Empty this array using a while loop and return it
	var array = ["hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello", "hello"];
    while (array.length>=1) {
        array.pop()
    }
    console.log(array)
}
lvl6exercise3();