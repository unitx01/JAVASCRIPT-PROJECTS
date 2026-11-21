//defines the global variables. 
var x = 1954;
var y = "Nineteen fifty four, here is some extra text";

//String_Method to display x's value.
function string_Method(){
    document.getElementById("Assignment_8_string").innerHTML = x.toString();
}
//concat_Method adds additional text to the y string, I also added the slice method to get rid of the extra text.
function concat_Method(){
    document.getElementById("Assignment_8_concat").innerHTML = y.slice(0,19).concat(". this is x's value.");
}
//slice_Method cuts the "here is some extra text" portion of the y variable.
function slice_Method(){
    document.getElementById("Assignment_8_slice").innerHTML = y.slice(0,19);
}
//Precision_Method turns the value of x in a string representing it.
function precision_Method(){
    document.getElementById("Assignment_8_toPrecision").innerHTML = x.toPrecision(3);
}