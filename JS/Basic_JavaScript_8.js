function Slice_Function(){

    var Phrase = "Hello my name is Anna";
    var Omit = Phrase.slice(17,21);
    document.getElementById("Slice_It").innerHTML = Omit;
}

function Concat_Function(){

    var Phrase1 = "Hello my name is Anna";
    var Phrase2 = ". It is a pleasure to meet you!";
    var Phrase3= " See you later..";
    var Combine = Phrase1.concat(Phrase2,Phrase3);
    document.getElementById("Concat_It").innerHTML = Combine;
}

function ToString_Function(){

    var Y = 1339;
    document.getElementById("String_It").innerHTML = Y.toString();
}

function ToPrecise_Function(){

    var PI = 3.14159265359;
    document.getElementById("Precise_It").innerHTML = PI.toPrecision(3);
}