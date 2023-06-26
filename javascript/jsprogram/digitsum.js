var readline=require("readline-sync")
console.log("enter the number")
var num=Number(readline.question())

// let n=123;
let sum=0;

while(num!=0)
{
    let rem=num%10;
    num=Math.floor(num/10)
    sum=sum+rem;
}
console.log(sum);
