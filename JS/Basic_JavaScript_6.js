
function My_Sixth_Function() {

 var Height, Can_Ride;
 Height = document.getElementById("Height").value;
 Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
 document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
   
}

function count_function(){
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Start_Pt = 5;
        function Add_One(){Start_Pt +=1;}
        Add_One();
        return Start_Pt;
    }
}

function Monitor(Make, Model, Year, RefreshSpd , Resolution) {
    this.Monitor_Make = Make;
    this.Monitor_Model = Model;
    this.Monitor_Year = Year;
    this.Monitor_RefreshSpd = RefreshSpd;
    this.Monitor_Resolution = Resolution;
}

var Roman = new Monitor("Alienware", "AW2515HF", "2018", "240 HZ", "1920 x 1080");
var Somemore = new Monitor("Dell", "SG2615D", "2014", "144 HZ", "2650 x 1440");
 
function myMonitorOutput() {
    document.getElementById("MonitorOutputs").innerHTML = "Roman owns a " + Roman.Monitor_Make +
     " monitor with a refresh rate of " + Roman.Monitor_RefreshSpd;
}


