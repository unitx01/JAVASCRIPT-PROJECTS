function fender_telecaster() {  // Defines the function fender_telecaster
    var Instrument = { // defines Instrument as our variable
        Brand:"Fender", // Defines the Brand as "Fender"
        Color:"Black", // Defines the color as "Black"
        Model:"Telecaster",// Defines the Model as "Telecaster"
        Year:"1967",// Defines the year as "1967"
        Type:"Electric Guitar"// Defines the type as "Electric Guitar"
    };
    

    delete Instrument.Year; // Deletes the value of Instrument.Year from document.getElementById("Year").innerHTML = Instrument.Year and leaves it as undefined
    document.getElementById("Model").innerHTML = Instrument.Model; // Finds the ID element "Model" and displays the value of Instrument.Model
    document.getElementById("Brand").innerHTML = Instrument.Brand;// Finds the ID element "Brand" and displays the value of Instrument.Brand
    document.getElementById("Color").innerHTML = Instrument.Color;// Finds the ID element "Color" and displays the value of Instrument.Color
    document.getElementById("Year").innerHTML = Instrument.Year;// Finds the ID element "Year" and displays the value of Instrument.Year
    document.getElementById("Type").innerHTML = Instrument.Type;// Finds the ID element "Type"displays the value of Instrument.Type
    
}