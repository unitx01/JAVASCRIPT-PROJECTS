function fender_telecaster() { 
    var Instrument = {
        Brand:"Fender",
        Color:"Black",
        Model:"Telecaster",
        Year:"1967",
        Type:"Electric Guitar"
    };
    
    document.getElementById("Model").innerHTML = Instrument.Model;
    document.getElementById("Brand").innerHTML = Instrument.Brand;
    document.getElementById("Color").innerHTML = Instrument.Color;
    document.getElementById("Year").innerHTML = Instrument.Year;
    document.getElementById("Type").innerHTML = Instrument.Type;
}