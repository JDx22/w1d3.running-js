var age=prompt("What is your age ?");
if (age< 18 )
    alert("You can't have a drink!");
else
    alert("have a drink");


var citizen=prompt("Papers, Please!");
citizen=citizen.toLocaleLowerCase();
if(citizen==="israeli")
    alert("Glorty for Israel");
else
    alert("detain");

var gender=prompt("male or female?");
gender=gender.toLowerCase();
if(age<18)
    alert("can't have a drink");
else if(gender=== "male")
    alert("20 shekels");
else 
    alert("free drinks");