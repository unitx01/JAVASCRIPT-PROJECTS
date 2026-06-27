function y() {

    var x = Math.random() * 100 + 5 - 5 * 10 % 20; //Math operation with random
    var a = 9 // defines that a has the value of 9
    var b = 2 // defines that a has the value of 2

    a++; // Increase a by one
    b--; // Decrease b by one

    var z = x + a - b; // adds the value of x to a detracting b




    document.getElementById("y").innerHTML = z ; // finds the ID "y" and displays the result of the function
}