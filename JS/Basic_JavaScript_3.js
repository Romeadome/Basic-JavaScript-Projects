

function My_Third_Function() {
   
    var addition = 2 + 2;
    var subtraction = 2-2;
    var decrement = 2;
    var increment = 2;
    var multiply = 2 * 2;
    var division = 5/2;
    var modulo = 5 % 2;
    decrement--;
    increment++;

    document.getElementById("Math").innerHTML = "2 + 2 = "+ addition; 
    document.getElementById("Math2").innerHTML = "2 - 2 = "+ subtraction;
    document.getElementById("Math3").innerHTML = "2 decremented by 1 = "+ decrement; 
    document.getElementById("Math4").innerHTML = "2 incremented by 1 = "+ increment;
    document.getElementById("Math5").innerHTML = "2 * 2 = "+ multiply; 
    document.getElementById("Math6").innerHTML = "5 / 2 = "+ division;
    document.getElementById("Math7").innerHTML = "5 % 2 = "+ modulo; 
    document.getElementById("Math8").innerHTML =  "Today's Random Lotto Number is: " + Math.random() * 100;
}
