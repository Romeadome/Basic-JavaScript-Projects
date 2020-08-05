function count_to_ten() {
    var digit= "";
    var x = 1;
    while (x < 11) {
        digit += "<br>" + x;
        x++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = digit;
}
function for_loop() {
    var instruments = ["Guitar", "Drums", "Flute", "Bass", "Piano", "Violin"];
    var content = "";
    var y;
    for (y = 0; y < instruments.length; y++) {
        content += instruments[y] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML = content;
}
function cat_pics() {
    var cat_picture = [];
    cat_picture[0] = "sleeping";
    cat_picture[1] = "meowing";
    cat_picture[2] = "purring";
    cat_picture[3] = "eating";
    cat_picture[4] = "playing";
    
    document.getElementById("cat").innerHTML = "In this picture, the cat is " + cat_picture[2];
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand: "Bob Marley", color: "red"};
    Musical_Instrument.color = "Green";
    Musical_Instrument.price = "$600";
    
    document.getElementById("constant").innerHTML = "The cost of the " + 
    Musical_Instrument.color + " " +
    Musical_Instrument.brand + " " + Musical_Instrument.type + " is " +
    Musical_Instrument.price;
}

var dic = "what";
document.write( dic);
{
    let dic = "huh";
    document.write("<br>" + dic);
}
document.write("<br>" + dic);
 


function car_function(){
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2012 ", 
    color: "red ",
    describe: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
        
    }
  
};
document.getElementById("Carobject").innerHTML = car.describe();
}

