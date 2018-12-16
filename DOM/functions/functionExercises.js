//The Array
myArray = [2,-5,9,-34,23,16,-7,10,25,43]

// Positive numbers
var positiveArray = myArray.filter(x => x>1)
//console.log(positiveArray)


//Even numbers
var evenArray = myArray.filter(x => x%2==0)
//console.log(evenArray)

//Square the numbers
var squareArray = myArray.map(x => x*x)
//console.log(squareArray)

//City Array
var cities = [ 
    { name: 'Los Angeles', temperature: 60.0}, 
    { name: 'Atlanta', temperature: 52.0 }, 
    { name: 'Detroit', temperature: 48.0 }, 
    { name: 'New York', temperature: 80.0 } ];

//Return new Array containin the cities whose temperature is cooler than 70 degrees
var coolCities = cities.filter(x => x.temperature <= 70)
//console.log(coolCities)

// Return City names
var cityNames = cities.map(x => x.name)
//console.log(cityNames)


//People Array
var people = [ 'Dom', 'Lyn', 'Kirk', 'Autumn', 'Trista', 'Jesslyn', 'Kevin', 'John', 'Eli', 'Juan', 'Robert', 'Keyur', 'Jason', 'Che', 'Ben' ];


//Good Job! Given an array, print out good job per person
// var goodJob = people.forEach(function(x,y){
//     console.log('Good Job, '+ people[y]+'!')
//})


//Sort an Array in alphabetical order
//console.log(people.sort())


// Sort an Array by length
var sortedPeople = people.sort((a,b) => (a.length>=b.length)?1:-1)
//console.log (sortedPeople)

// Sort this array
var arr = [ 
    [1, 3, 4], 
    [2, 4, 6, 8], 
    [3, 6] ];