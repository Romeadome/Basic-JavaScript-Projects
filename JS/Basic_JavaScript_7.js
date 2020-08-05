if (5 < 9) {
    document.write("This statement shows because 5 is less than 9." + "<br>");

}var X = 10;
function Global_Scope(){
    document.write(10 + X + "<br>");
}

function Global_scope2(){
    document.write(X + 120 + "<br>");
}

Global_Scope();
Global_scope2();


function Local_Scope(){
    var Y = 30;
    document.write(10 + Y + "<br>");
}

function Local_scope2(){
    console.log(Y + 120 + "<br>");
}

Local_Scope();
Local_scope2();

function Time_Function(){

    var Time = new Date().getHours();
    var TOD;

    if (Time < 12 == Time > 0) {
        TOD = "It is the morning time.";
    }

    else if (Time > 12 == Time < 18) {
        TOD = "It is the afternoon";
    }

    else {
        TOD = "It is night time";
    }

    document.getElementById("Time_of_Day").innerHTML = TOD;
}