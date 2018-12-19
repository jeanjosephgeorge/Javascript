//constructing the class
class Person {
    constructor(name){
        this.name = name;
    }

// a function within the class, a method,
    myName(){
        return `My name is ${this.name}`
    }
}
//Creating new instance and then running method
var person1 = new Person('Eric')
console.log(person1.myName())

//Creating second instance and then running method
var person2 = new Person('Eric')
console.log(person2.myName())

//Inheritance which Zombie
class Zombie extends Person{
    constructor(name){
        super(name)
    
}

var z = new Zombie('Veronica')




//ITERATING OVER STRINGS
// var count = 0;
// var vowels = ['a','e','i','o','u'];

// var str = 'This is an awesome day';

// for(let i=0; i<str.length; i++){
//     if(vowels.indexOf(str) !== -1) count++;
// }

// for (let s of str){
//     if(vowels.includes(s)){
//         count++
//     }
// }




//let x = [1,2,3,4]

// let y = x.map(function(index){
//     return index+1
//})

//SHORT VERSION
let y = x.map((x) => (x+1))
//console.log(y)

let addNumbers = (x=0,y=0) => console.log(x+y);

function sum(...args){
    let total;
    total=args.reduce(function(acc,elem){
        return acc+elem
    },0)
    return total;
}

//total = args.reduce((acc,elem)=>acc+elem,0)

// console.log(sum(1,3))
// console.log(sum(1,4,5))
// console.log(sum(2,3,4,5))

//EXTENDED WAY OF WORKING WITH IF-ELSE
function isNumber(a){
    if(typeof(a)==='number'){
        return 'that is a nummer'
    } else{
        return 'not a nummer'
    }
}

//TERNARY OPERATOR
//Condition ? Result 1 : Result 2;

function isNumber(a){
   return typeof(a) === 'number' ? "that is a number" : "not a number" 
}
