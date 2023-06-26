// var readline=require("readline-sync")
// console.log("enter the number")
// var ip=String(readline.question())

// console.log(ip);
// // console.log(Str6.indexOf("0")); 
// // if (Str6.indexOf(0)==Str6.length-6)
// //  {
// //     console.log("true");
// // }
// // else
// // {
// //     console.log("false");
// // }

let num=371;
let temp=num;
let count=0;
let sum=0;
let pow=1;
while(num!=0)
{
   var rem=num%10
    num=Math.floor(num/10)
    count++
// console.log(count);

for(i=1;i<=count;i++)
{
     pow=pow*rem;

}
sum=sum+pow
}
if(temp==sum)
{
  console.log("True")
}
else{
    console.log("False")
}