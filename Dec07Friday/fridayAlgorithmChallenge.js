// var n = 

// if n is even divide it by 2
// if n is odd, multiply by 3, add 1

// final solution = 1

// CHALLENGE ONE 


function collatz(num){
    if (num==1) {
        console.log("Value is 1.\nSequence end reached");
        
    } else if ((num!=1) && (num%2 == 0)) {
            num = num/2;
            console.log(num);
            collatz(num);
        }
     else if ((num!=1) && (num%2 != 0)) {
            num=((num*3)+1)
            console.log(num);
            collatz(num);
    }
}

// collatz (21);



// CHALLENGE TWO

// Find the largest palindrome made from the product of two-digit numbers

// Loop throw two sets of 1 to 1000
// check product

function pal(){
    for (var num1=999;num1>899;num1--){
        for (var num2=num1; num2>899;num2--){
            let prod=num1*num2;
            var ans = prod.toString();
            if (palCheck(ans)){
                return (ans);
                }
            }
        } 
    } 
//console.log(pal());

// // PALINDROME FUNCTION
function palCheck(ans){
return (ans == ans.split('').reverse().join(''));
}



// CHALLENGE THREE

function smallest(){
        var num = 2000;
        while (!isDivisible(num)){
            num++;
        }
    } console.log(num);


function isDivisible(num){
    for (i=1; i<=10; i++){
        if (num%i != 0){
        return false
        }
    }
    return true
}

//smallest();
console.log(isDivisible(2520));