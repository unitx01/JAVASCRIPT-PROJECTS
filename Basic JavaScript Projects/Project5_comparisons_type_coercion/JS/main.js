var cats = 10; // A variable that stores a number
var x = 30; // A variable that stores a number

// typeof checks the variable's data type, document.write() writes the results. 
document.write("the value of cats is: " + cats + "<br>");
document.write("the data type of cats is: " + typeof cats + "<br>");


//This function runs when the button is pressed, it finds the element with the id "test" and puts a string and a number in.

function my_Function() {
    document.getElementById("Test").innerHTML = "I want " + 10 +" cats";
}

// Operator examples

document.write("The data type of x is: " + typeof x + "<br>");

// < checks whether the left value is smaller
document.write("5 < 5 is " + (5 < 5) + "<br>");

// == compares values and converts types first
document.write('5 == "5" is ' + (5 == "5") + "<br>");

// === compares values and types
document.write('5 === "5" is ' + (5 === "5") + "<br>");

// > checks whether the left value is bigger
document.write("10 > 3 is " + (10 > 3) + "<br>");

// && is true only when both sides are true
document.write("(5 > 2) && (10 > 8) is " + ((5 > 2) && (10 > 8)) + "<br>");

// || is true when at least one side is true
document.write("(5 < 2) || (10 > 8) is " + ((5 < 2) || (10 > 8)) + "<br>");

// ! flips true to false and false to true
document.write("!(5 > 2) is " + !(5 > 2) + "<br>");
