function My_First_Function() { //variable called str and assign a string
    var str = "A Cat!"; //defines the variable str with this text
    str += " A beautiful cat!"; // using the += to add more text to the string
    document.getElementById("Button_Text").innerHTML = str;// finds the ID elemnt "Button_Text" and replaces the value of str
}