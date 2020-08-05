

function My_Second_Function() {
    var str1 = "This text should be red.";
    var str2 = "This text should be green.";
    var color1 = str1.fontcolor("red");
    var color2 = str2.fontcolor("green");
    var sentence = "This is an extended sentence";
    sentence += " concantenated together!"

    document.getElementById("Message").innerHTML = color1 + color2;
    document.getElementById("Message 2").innerHTML = sentence;

}