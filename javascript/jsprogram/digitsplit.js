var readline=require("readline-sync")
console.log("enter the number")
var num=Number(readline.question())

let count=0;
while(num>0)
{
    count++;
    num=Math.floor(num/10);

}
console.log(count)