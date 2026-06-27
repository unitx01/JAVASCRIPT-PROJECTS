function y() {

    var x = Math.random() * 100 + 5 - 5 * 10 % 20; //Math operation with random
    var a = 9
    var b = 2

    a++;
    b--;

    var z = x + a - b;




    document.getElementById("y").innerHTML = z ; // finds the ID "y" and displays the result of the function
}