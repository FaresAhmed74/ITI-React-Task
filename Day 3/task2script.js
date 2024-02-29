let color = prompt("What is the color?");
let data=[];
let check=[];
function Name(){
     
     data[0]=prompt("enter your name:");
     if(!(/[a-zA-Z]$/.test(data[0])))
     {
          alert("your name must be characters only");
          Name();
     }
}
Name();
function num()
{
     data[1]=prompt("enter your phone number:");
     if(!(/[0-9]{8}$/.test(data[1])))
     {
          alert("your phone number must be numbers only of length 8");
          num();
     }
}
num();

function mobile()
{
     data[2]=prompt("enter your Mobile number:");
     if(!(/^(010|011|012)[0-9]{8}$/.test(data[2])))
     {
          alert("your mobile number must be numbers only of length 11");
          mobile();
     }
}
mobile();

let Welcome=document.getElementById("Welcome");
let tele=document.getElementById("tele");
let mob=document.getElementById("mob");

Welcome.innerText+=data[0];
Welcome.style.color=color;
tele.innerText+=data[1];
tele.style.color=color;
mob.innerText+=data[2];
mob.style.color=color;



