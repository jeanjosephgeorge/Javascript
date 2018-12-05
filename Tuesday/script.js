document.body.innerHTML = "Hello World"


for (var count=0; count<10; count++){
    console.log(count)
}

var myArray = [1,2,3,4,5];

myArray.push(56) // adds the element to the end and then returns the length of the array

myArray[3] = 43;

myArray.pop() // this removes the last element of the array and then returns the last element

myArray.shift() // this removes the beginning element of the array and returns the element

myArray.splice(begin, num)  // this specifies starting location and then the number of elements to remove. 

sentence.split (" ")    // this splits a string at " " and the separated words are put into an array