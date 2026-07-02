function my_Dictionary() {
    var Instrument = {
        Brand:"Fender",
        Color:"Black",
        Model:"Telecaster",
        Year:"1967",
        Type:"Electric Guitar"
    };
    
    document.getElementById("Dictionary").innerHTML = Instrument.Model;
}