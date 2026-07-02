var a = 2 // defines that a has the value of 2
var b = 4 // defines that b has the value of 4

function random_function() {

    var x = Math.random() * a; //Random Math number multipled by a

    document.getElementById("random_function").innerHTML = x; // finds the ID "random_function" and displays the result of the function
}

function addition_function() { 
    var c = a + b; //Adds the value of a which is 2 and the value of b which is 4
    document.getElementById("addition").innerHTML = c;// finds the ID "addition_function" and displays the result of the function
}

function subtraction_function() { 
    var d = a - b;//Subtracts the value of a which is 2 and the value of b which is 4
    document.getElementById("subtraction").innerHTML = d;// finds the ID "subtraction_function" and displays the result of the function
}

function multiplication_function() { 
    var e = a * b;//Multiplies the value of a which is 2 and the value of b which is 4
    document.getElementById("multiplication").innerHTML = e;// finds the ID "multiplication_function" and displays the result of the function
}
function modulus_function() { 
    var f = a % b;//Returns the remainder after dividing one a by b.
    document.getElementById("modulus").innerHTML = f;// finds the ID "modulus_function" and displays the result of the function
}
function increment_function() {
    a++;//Increments a by 1
    document.getElementById("increment").innerHTML = a;// finds the ID "increment_function" and displays the result of the function
}
function decrement_function() {
    a--;//Decrements a by 1
    document.getElementById("decrement").innerHTML = a;// finds the ID "decrement_function" and displays the result of the function
}