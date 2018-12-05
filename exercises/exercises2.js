                    // MADLIB

function madLib(x,y){
    console.log (x+"\'s favorite subject in school is "+y+".") 
}
// madLib ("Jean","Biology")



                    // TIP CALCULATOR

function tipAmount (num, service) {
    
    var service;

    if (service == "good"){
        x=0.2;
    } else if (service == "fair"){
        x=0.15;
    } else if (service == "bad"){
        x=0.1;
    }
    tip = num*x;
    console.log(tip)
} 
//tipAmount (100,"bad")



                // TIP CALCULATOR2

function totalAmount (num, service) {
    
    var service;
    var total;

    if (service == "good"){
        x=0.2;
    } else if (service == "fair"){
        x=0.15;
    } else if (service == "bad"){
        x=0.1;
    }
    tip = num*x;
    total = tip+num;
    
    console.log(total)
} 
//totalAmount (100,"fair")



                // PRINT NUMBERS

function printNumbers (x,y){
    for (var num=x; num<=y; num++)
    console.log(num);
}
//printNumbers(1,10)



                // PRINT A SQUARE

function printSquare(num) {
    var line = "";
    for (var x=0; x<num; x++){
        line = (line+"*");
    }
    for (var y=0; y<num; y++){
        console.log(line);
    }
}   
//printSquare (6)



                // PRINT A BOX

function printBox(x,y){
    var line="";
    var middle="";
    for (var a=0;a<x;a++){
        line=line+'*';
    }
    for (var b=0; (b<(x-2));b++){
        middle=middle+" ";
    }
    console.log(line);
    for (var c=0; c<(y-2);c++){
    console.log('*'+middle+'*');
    }
    console.log(line);
}
//printBox(8,8)



                // Print a Banner

function printBanner(myString){
    
    border="";
    len = myString.length;
    for (var x=0; x<(len+4); x++){
        border+= "*"
    }
    console.log(border);
    console.log("* "+myString+" *");
    console.log(border);
}
//printBanner('Welcome to DigitalCrafts!')



                    // L33TSP34K

function leetspeak(myString) {
    myArray = [];
    for (var x=0;x<myString.length;x++){
        myArray.push(myString[x]);
    }  
    // console.log(myArray)

    for (var y=0;y<(myArray.length);y++){
        if (myArray[y]== "a" || myArray[y]=="A" ) {
            myArray[y] = "4";
        }
        if (myArray[y]== "e" || myArray[y]=="E" ) {
            myArray[y] = "3";
        }
        if (myArray[y]== "g" || myArray[y]=="G" ) {
            myArray[y] = "6";
        }
        if (myArray[y]== "i" || myArray[y]=="I" ) {
            myArray[y] = "1";
        }
        if (myArray[y]== "o" || myArray[y]=="O" ) {
            myArray[y] = "0";
        }
        if (myArray[y]== "s" || myArray[y]=="S" ) {
            myArray[y] = "5";
        }
        if (myArray[y]== "t" || myArray[y]=="T" ) {
            myArray[y] = "7";
        }
    }
    newString = myArray.join('');
    console.log(newString);
}

// leetspeak('This is gonna be good.')




                    // LONG-LONG VOWELS

function longVowels(myString) {
    myArray=[];
    newString='';
    for (var x=0; x<myString.length; x++){
        myArray.push(myString[x]);
    }
    for (var y=0; y<myArray.length;y++){
        if ((myArray[y]==myArray[y-1]) && myArray[y]=="o"){
            myArray[y]="oooo";
        }
        if ((myArray[y]==myArray[y-1]) && myArray[y]=="e"){
            myArray[y]="eeee";
        }
    }
    newString = myArray.join('');
    console.log(newString);
}
//longVowels("Good Cheese");



                        // JUST THE POSITIVES

function positiveNumbers(myArray) {
    newArray = [];
    for (var x=0;x<myArray.length;x++){
        if (myArray[x]>=0){
            newArray.push(myArray[x]);
        }
    }
    console.log(newArray);
}

myArray = [1,-3,5,-3,0]
positiveNumbers(myArray)