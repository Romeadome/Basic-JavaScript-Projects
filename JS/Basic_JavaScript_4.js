

function My_Fourth_Function() {
   var Television = {
       Brand: "Sony",
       ScreenSize:"27\"",
       Color: "White",
       Price: "$200",
       Location: "China"
   };
   delete Television.Location;
   var BiggestNumber = Number.MAX_VALUE;

   document.getElementById("Dictionary").innerHTML = "The Sony Television Price is "
   + Television.Price;
   document.getElementById("Dictionary2").innerHTML = "The Sony Television Location is "
   + Television.Location;
   document.getElementById("Math").innerHTML = BiggestNumber;

}
