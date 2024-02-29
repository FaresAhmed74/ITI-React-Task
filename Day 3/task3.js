// let sum=0;
// while(true)
// {
//     let num = parseInt(prompt('Enter the numbers '));
//     if(num==0)
//     break;
//     else
//     {
//         sum+=num;
//     }

// }

let arr=[]
while(true)
{
  let input=parseInt(prompt("enter the values and enter 0 to stop"));
  if(input == 0)
    break;
  else{
    arr.push(input);
  }
}
document.write("the values is : ");
for(let i in arr){
  document.write(arr[i]+' ');
}
document.write(" || ")
// sort asc
arr.sort(function(a,b){return a - b});

document.write("the values in ascending order : ");
for(let i in arr){
  document.write(arr[i]+' ');
}
document.write(" || ")
// sort dsc
arr.sort(function(a,b){return b - a});
document.write("the values in descending order : ");
for(let i in arr){
  document.write(arr[i]+' ');
}
























// let check=confirm("do you want to consider the case of the text?");
// let num=prompt("enter the text "); // radar
// let rev=[];
// if(!check)
// {
//     num=num.toLowerCase();
// }
// for(let i=0;i<num.length;i++)
// {
//     rev.push(num[num.length-1-i]);
// }
// if (rev.join('') === num) {
//     //console.log(rev.join(''));
//     console.log("text is palindrome");
//   }
//   else{
//     console.log("not palindrome");  
//   }
//  ///////////
// let st=prompt("enter the string");
// let cnt=0;
// for(let i=0;i<st.length;i++)
// {
//     if(st[i]=='e')
//         cnt++;
// }
// console.log(cnt);
// ///////////////////
// function mod(){
// let n=prompt("enter the number");
// if(!isNaN(n))
//    {
//      if(n%2==0)
//         console.log("even");
//     else
//         console.log("odd");
//    }
// else
//    {
//      alert("please enter number");
//      mod()
//    }
// }
// mod();

// var ref=/^[0-9]{4,5}/;
//  console.log(ref.test(num))
