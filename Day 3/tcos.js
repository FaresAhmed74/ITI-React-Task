let rad = prompt("what is the value of the radius ");
let area = Math.PI * rad ** 2;
alert("The area of the circle is : " +area);

//
let sqr=prompt("what is the value you want to calculate the square root of it");
let res=Math.sqrt(sqr);
alert("the square root of this value is : "+ res);

//
let angle=prompt("enter the angle you want to calculate its cos");
let ans=Math.cos(angle*(Math.PI/180));
alert("the result is : "+ans.toFixed(4));
