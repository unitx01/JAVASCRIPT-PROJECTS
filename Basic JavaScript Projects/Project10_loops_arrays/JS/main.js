// ===================== ARRAY + FOR LOOP =====================

// Array that stores a list of musical instruments
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];

// This function uses a for loop to display every instrument in the array
function for_Loop() {
    var Content = "";   // Starts empty on each click so the list doesn't repeat
    var Y;              // Loop counter, used as the array index

    // Y = 0: start at the first item in the array (arrays start at index 0)
    // Y < Instruments.length: keep going until every item has been used
    //   (.length is the number of items, 7, so the last index is 6)
    // Y++: add 1 to Y each time to move to the next instrument
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";   // Add the instrument and a line break to the list
    }

    // Display the finished list in the element with id "List_of_Instruments"
    document.getElementById("List_of_Instruments").innerHTML = Content;
}


// ===================== WHILE LOOP =====================

// This function uses a while loop to count from 1 to 10
function while_Loop() {
    var X = 1;      // Starting number for the count
    var text = "";  // Empty text that the loop adds each line to

    // Keep looping as long as X is 10 or less
    while (X <= 10) {
        text += "The number is " + X + "<br>";   // Add the current number on its own line
        X += 1;   // Add 1 to X so the condition eventually becomes false (prevents an infinite loop)
    }

    // Display the finished text in the element with id "while_Loop_Demo"
    document.getElementById("while_Loop_Demo").innerHTML = text;
}


// ===================== OBJECT WITH LET =====================

// This function creates an object with "let" and displays its properties
function let_Function() {
    // Object that describes a mouse, with two properties: color and name
    let mouse = {
        color: "Gray",
        name: "Itzik",
    };

    // Build a sentence from the object's properties using dot notation
    var text = mouse.name + " is a " + mouse.color + " mouse";

    // Display the sentence in the element with id "let_Demo"
    document.getElementById("let_Demo").innerHTML = text;
}