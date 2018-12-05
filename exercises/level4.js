function lvl4exercise1() {
	// Return the boolean value "true"
    var x = (3==3);
    console.log(x);
}

function lvl4exercise2() {
	// Return the boolean value "false"
    var x = (3==4);
    console.log(x);
}

function lvl4exercise3(bool) {
    // Return the opposite of the input boolean value
    var x = bool;
    y = !bool;
    console.log(y)

}

function lvl4exercise4(bool1, bool2) {
	// Return the logical "and" of the input boolean values
    var x = bool1;
    var y = bool2;
    ans = bool1 && bool2;
    console.log(ans);
}

function lvl4exercise5(bool1, bool2) {
	// Return the logical "or" of the input boolean values
    var x = bool1;
    var y = bool2;
    ans = bool1 || bool2;
    console.log (ans);
}

function lvl4exercise6(bool1, bool2) {
	// Return the logical "equivalence" of the input boolean values
    var answer = (bool1 == bool2)
    console.log(answer)
}

lvl4exercise6(true, false)