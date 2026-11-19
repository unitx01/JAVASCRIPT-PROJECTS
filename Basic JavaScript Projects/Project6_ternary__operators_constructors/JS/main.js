//Constructor function
function Guitar(Make, Model, Year, Color) {
    this.Guitar_Make = Make;
    this.Guitar_Model = Model;
    this.Guitar_Year = Year;
    this.Guitar_Color = Color;
}

//"new" creates a new object
var Gibson = new Guitar("Gibson", "SG", 2020, "green");
var Fender = new Guitar("Fender", "JazzMaster", 2019, "Black");
var Ibanez = new Guitar("Ibanez", "I don't remember Ibanez models...", 1991, "Pink");

//Displays the properties on the page and is an example of a nested function
function Guitar_Function() {
    function Nested_Example(Player, Guitar_Object) {

        return Player + " plays a " + Guitar_Object.Guitar_Color + "-colored " +
            Guitar_Object.Guitar_Make + " " + Guitar_Object.Guitar_Model +
            " manufactured in " + Guitar_Object.Guitar_Year;
    }


    document.getElementById("Guitar_Info").innerHTML = Nested_Example("Steve Vai", Ibanez);
}



