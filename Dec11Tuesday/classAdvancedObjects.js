//PROPERTIES

// this is a constructor
var X = function (j){
    this.i = 0;
    this.j = j;
    // this.getJ = function(){
    //     return this.j
    }

// This sets the getJ function for every X based class after it
// Its a funny way of doing inheritance
X.prototype.getJ = function(){
    return this.j
}
// now we're creating instances
var x1 = new X(1)
var x2 = new X(2)

console.log(x1.getJ())
console.log(x2.getJ())

// INHERITING PROPERTIES FROM OTHER
var paul = {
    fname: 'Paul',
    lname: 'Bailey',
    greet: function () {
      console.log(`Hello ${this.fname} ${this.lname}`);
    }
  };

//creating shannon to inherit from paul
var shannon = {fname: 'Shannon'};

shannon.__proto__ = paul

console.log(shannnon.greet())




// DELETING PROPERTIES FROM AN OBJECT

var characterSheet = {};
characterSheet['name'] = 'tim berners-lee';
characterSheet['title'] = 'sir';
characterSheet['powers'] = 'invent the web';
// This is how you would delete
// delete characterSheet[name]

for (var o in characterSheet){
    //console.log(o + " : " + characterSheet[o])
}


/// CLASSES or OBJECTS as templates

var deck = new Array();

function Course (title, instructor, level, published, views){
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
}

var Course1 = new Course('Digitalcrafts','Veronica',1,true,0);
var Course2 = new Course('Immersive','Azam',1,true, 0)

//console.log(Course1.instructor)

// var courseCatalog = [
//     newCourse('Digitalcrafts','Veronica',1,true,0)
//     newCourse('Immersive','Azam',1,true, 0)

// ]

// SOME BASICS 
// var deck = [];

// var card = {};

// card.name = 'hearts';
// card.point = 3;
// card.suit = 'hearts'
// card['name space'] = 'hearts'

// console.log(card['name space'])