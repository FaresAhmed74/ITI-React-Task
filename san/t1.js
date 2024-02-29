// // let win;
// // const p="typing message";
// // let i=0;
// // let id;
// // function openNew()
// // {
// //     if(win==undefined||win.closed)
// //     {
// //         win=open("page2.html","","width=500,height=500");
// //         id=setInterval(Display,1000);
       
// //     }
// // }

// // function Display(){
// //    win.document.write(p[i++]);
// //    if(i==p.length)
// //     clearInterval(id);
// // }
// // ////////////////////////////////
// //     ////////////////TASK2 /////////////////
// // //?firstName=fares&firstName=25&firstName=ss
// // // ?firstName=fares , firstName=25 , firstName=ss
// // document.write("UserName: "+location.search.split("&")[0].split("=")[1]+"</br>");
// // document.write("Age: "+location.search.split("&")[1].split("=")[1]+"</br>");
// // document.write("Email: "+location.search.split("&")[2].split("=")[1]+"</br");
// // function display(inputID){
// //     var txt=document.getElementById("txti");
// //     txt.value+=inputID.value;
// // }

// // function clearr(){
// //     var txt=document.getElementById("txti");
// //     txt.value="";
// // }
// // function trans(){
// //     var txt=document.getElementById("txti");
// //     txt.value=txt.value.substring(0,txt.value.length-1);
// // }
// // /////////////////////task2///////////////
// // var n=1;
// // function next(){
// //     var imgg=document.getElementById("imgss");
// //     if(n<1)
// //         n=1;
// //      n++;
// //     if(n<=6)
// //     {   
// //         imgg.src="../imgs/"+n+".jpg";
// //         console.log("next:"+ n);
// //     }
// //     else
// //     {
// //         alert("the images has finished");
// //     }
// // }
// // function slideShow(){
// //     if(n<=6)
// //     nxtIntrv=setInterval(next,1500);
// //     else{
// //         clearInterval(nxtIntrv);
// //         prevIntrv=setInterval(prev,1500);
// //     }
        
    


// // }
// // function stop(){
// //     clearInterval(nxtIntrv);
// // }
// // function prev(){
// //     var imgg=document.getElementById("imgss");
// //     if(n>6)
// //         n=6;
// //      n--;
// //     if(n>=1)
// //     {
// //         imgg.src="../imgs/"+n+".jpg";
// //         console.log("prev:"+ n);
// //     }
// //     else
// //     {
// //         alert("the images has finished");
// //     }
// // }
// let para=document.getElementById("PAR");
// function ChangeFont(sel){
//     switch(sel)
//     {
//         case "georgia":
//             para.style.fontFamily="georgia";
//         break;
//         case "courier":
//             para.style.fontFamily="courier";
//         break;
//         case "impact":
//             para.style.fontFamily="impact";
//         break;
//         case "verdana":
//             para.style.fontFamily="verdana";
//         break;
//     }
// }

// function ChangeAlign(sel){
//     switch(sel)
//     {
//         case "left":
//             para.style.textAlign="left";
//         break;
//         case "center":
//             para.style.textAlign="center";
//         break;
//         case "right":
//             para.style.textAlign="right";
//         break;
//         case "justify":
//             para.style.textAlign="justify";
//         break;
//     }
// }
// function ChangeHeight(sel){
//     var currHeight=para.offsetHeight;
//     switch(sel)
//     {
//         case "normal":
//             para.style.height="";
//         break;
//         case "10px":
//             para.style.height="10px";
//         break;
//         case "15px":
//             para.style.height="15px";
//         break;
//         case "1.5":
//             para.style.height=currHeight*1.5+"px";
//         break;
//     }
// }
// function ChangeLSpace(sel){
//     switch(sel)
//     {
//         case "normal":
//             para.style.letterSpacing="";
//         break;
//         case "-1px":
//             para.style.letterSpacing="-1px";
//         break;
//         case "2px":
//             para.style.letterSpacing="2px";
//         break;
//         case "3px":
//             para.style.letterSpacing="3px";
//         break;
//     }
// }
// function ChangeIndent(sel){
//     switch(sel)
//     {
//         case "0px":
//             para.style.textIndent="0px";
//         break;
//         case "5px":
//             para.style.textIndent="5px";
//         break;
//         case "15px":
//             para.style.textIndent="15px";
//         break;
//         case "25px":
//             para.style.textIndent="25px";
//         break;
//     }
// }
// function ChangeTransform(sel){
//     switch(sel)
//     {
//         case "none":
//             para.style.textTransform="none";
//         break;
//         case "capitalize":
//             para.style.textTransform="capitalize";
//         break;
//         case "uppercase":
//             para.style.textTransform="uppercase";
//         break;
//         case "lowercase":
//             para.style.textTransform="lowercase";
//         break;
//     }
// }
// function ChangeDecorate(sel){
//     switch(sel)
//     {
//         case "none":
//             para.style.textDecoration="none";
//         break;
//         case "line-through":
//             para.style.textDecoration="line-through";
//         break;
//         case "overline":
//             para.style.textDecoration="overline";
//         break;
//         case "underline":
//             para.style.textDecoration="underline";
//         break;
//     }
// }
// function ChangeBorder(sel){
//     switch(sel)
//     {
//         case "none":
//             para.style.border="none";
//         break;
//         case "dotted":
//             para.style.border="dotted";
//         break;
//         case "double":
//             para.style.border="double";
//         break;
//         case "dashed":
//             para.style.border="dashed";
//         break;
//     }
// }
// function ChangeBorderColor(sel){
//     switch(sel)
//     {
//         case "none":
//             para.style.borderColor="white";
//         break;
//         case "pink":
//             para.style.borderColor="pink";
//         break;
//         case "red":
//             para.style.borderColor="red";
//         break;
//         case "green":
//             para.style.borderColor="green";
//         break;
//     }
// }
// ////////////////////////
// var press=document.getElementById("in");
// var reslt=document.getElementById("res");
// var output;
// press.addEventListener("keydown",function(ev){
//     if(ev.altKey)
//         output="you pressed alt";
//     else if(ev.shiftKey)
//         output="you pressed shift";
//     else if(ev.ctrlKey)
//         output="you pressed ctrl";
//     else
//         output=ev.keyCode;    
//     alert(output);
// })
// //////////////////
// document.addEventListener("contextmenu",function(ev){
//         ev.preventDefault();
// })
// /////////
// var submitt=document.getElementById("sub");
// submitt.onclick=function validate(){
//     var conf=confirm("do want to continue?");
//     if(!conf)
//         return false;
// }

// function swapp(x,y) ///// first task 
// {
//     document.write("before : x = " + x," y = " + y );
//     [x,y] = [y,x];
//     document.write("<br>")
//     document.write(" after: x = " + x," y = " + y );
// }

// //////////// task2 /////////
// let arr= [];
// arr=prompt("enter the array values").split(' ');

// function calcc(...arr)
// {
//     let mini=Math.min.apply(null,arr);
//     let maxi=Math.max(...arr);
//     alert( `the maxi value is ${maxi} and the mini value is ${mini}`);

// }
// calcc(...arr);



// /////////// today tasks /////////
// var fruits =["Apple" ,"strawberry", "banna","orange","mango"];
// let check=false;
// let startA=false;
// let divA=document.getElementById("a");
// let divB=document.getElementById("b");
// let divC=document.getElementById("c");


// // first 
// checkType= fruits.every(word => typeof(word)=='string')
// startA=fruits.some(word => word.startsWith('a')|| word.startsWith('A'))
// if(checkType)
//     divA.style.color="green";
// if(startA)
//     divB.style.color="green";

// let newArr=fruits.filter(word => word.startsWith('b') || word.startsWith('s'));
// divC.onclick=() => {
//     alert("the new array values is : " + newArr );
// }
// let myFruit=fruits.map(function(f){
//     return `I like ${f} <br>`
// });
// document.write(myFruit);
// // 

// /////////// task 2///
// function calc(obj,a=5){
//     var defObj={courseName:"js",courseDuration:"3 Days",courseOwner:"Fares"};
//     var t1=["courseName","curseDuration","courseOwner"];
//     var newObj=Object.assign({},defObj,obj);
//     return `Course Name: ${newObj.courseName} <br> Course Duration: ${newObj.courseDuration} <br> course Owner:${newObj.courseOwner}`
// }
// document.write("<hr>");
// document.write(calc());
// document.write("<hr>");
// document.write(calc({courseName:"cs",courseDuration:"7 Days",courseOwner:"Fares"}));
// document.write("<hr>");
// document.write(calc({courseName:"c++",courseOwner:"Fares"}));
// document.write("<hr>");
// document.write(calc({courseName:"oop"}));
//// task1 //////
// const myObj = {
//     fname:"fares",
//     lname:"ahmed",
//     age:21,
//     [Symbol.iterator] (){
//         let nxtStep=0;
//         let keyss=Object.keys(this);
//         return{
//             next(){
//                 return{
//                     value:{key:keyss[nxtStep],value:myObj[keyss[nxtStep]]},
//                     done: nxtStep++ ===keyss.length
//                 }
//             }
//         }
//     }
// };
// var itr=myObj[Symbol.iterator]()
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());
// console.log(itr.next());

// // for(let prop of myObj){
// //     console.log(prop);
// // }
// /////////// task 2////
// class polyogn{
//     constructor(sides){
//         this.sides=sides;
//     }
//     calcArea(){
//         return this.sides*this.sides;
//     }
//     toString(){
//         return `the toString of the polyogen ${this.sides}`;
//     }
// }
// class rect extends polyogn{
//     constructor(h,w){
//         super([h,w]);
//         this.h=h;
//         this.w=w;
//     }
//     calcArea(){
//         return this.h*this.w;
//     }
//     toString(){
//          return `the area of rectangle= ${this.calcArea()} , with height = ${this.h} and width = ${this.w}`;
//     }
// }
// class square extends polyogn{
//     constructor(side){
//         super([side,side]);
//         this.side=side;
//     }
//     calcArea(){
//         return this.side*this.side;
//     }
//     toString(){
//          return `the area of square= ${this.calcArea()} , with side length= ${this.side}`;
//     }
// }
// class triangle extends polyogn{
//     constructor(a,b,c){
//         super([a,b,c]);
//         this.a=a;
//         this.b=b;
//         this.c=c;
//     }
//     calcArea(){
//         const semi=(this.a+this.b+this.c)/2;
//         return Math.sqrt(semi*(semi-this.a)*(semi-this.b)*(semi-this.c));
//     }
//     toString(){
//          return `the area of triangle= ${this.calcArea()} , with side lengths= ${this.a}, ${this.b} , ${this.c}`;
//     }
// }
// class circle extends polyogn{
//     constructor(radius){
//         super([2*Math.PI*radius]);
//         this.radius=radius;
//     }
//     calcArea(){
//         return Math.PI*this.radius**2;
//     }
//     toString(){
//          return `the area of circle = ${this.calcArea().toFixed(4)} , with raduis= ${this.radius}`;
//     }
// }
// var rct=new rect(4,3);
// var sqr=new square(4);
// var cir=new circle(9);
// var tri=new triangle(3,4,5);
// var poly=new polyogn(2,5,4,6)

// function rectArea(){
//     alert(rct.toString())
// }
// function sqrArea(){
//     alert(sqr.toString())
// }
// function triArea(){
//     alert(tri.toString())
// }
// function circleArea(){
//     alert(cir.toString())
// }
var btn=document.getElementById("myBtn");
var item=[];
var myPromise= new Promise(function(resolve,reject){
    var xmlhr=new XMLHttpRequest();
    xmlhr.open("GET","https://jsonplaceholder.typicode.com/users");
    xmlhr.onreadystatechange=()=>{
        if(xmlhr.readyState==4){
            if(xmlhr.status>=200&&xmlhr.status<300){
                resolve(xmlhr.responseText);
            }else{
                reject("failed");
            }
        }
    }
    xmlhr.send();
}
)
myPromise.then((data)=>{
    var res=JSON.parse(data);
    for(let i=0;i<10;i++){
        item[i]=res[i];
    }

}).catch((error)=>{
    console.log(error);
})

function display(id,name,usrName){
    var idd=document.getElementById("idD");
    var nam=document.getElementById("name");
    var user=document.getElementById("usrName");
    idd.value=id;
    nam.value=name;
    user.value=usrName;
}
btn.onclick=() => {
    for(let i=0;i<10;i++){
        display(item[i].id,item[i].name,item[i].username);
    }
}
fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => console.log(json))
////////////  task 2 ////////

function *fib1(n){
    let prev=0;
    let curr=1;
    for(let i=0;i<n;i++){
        yield prev;
        [prev,curr]=[curr,prev+curr];
    }
}
function *fib2(n){
    let prev=0;
    let curr=1;
    while(prev<=n){
        yield prev;
        [prev,curr]=[curr,prev+curr];
    }
}
var fib11=document.getElementById("fibb");
var fib22=document.getElementById("fib");
fib11.onclick=(()=>{
    const t=fib1(10);
    for(let i of t)
        console.log(i);
})

fib22.onclick=(()=>{
    const t2=fib2(10);
    for(let j of t2)
        console.log(j);
})
