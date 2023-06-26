var readline=require("readline-sync")
console.log("Enter the number")
var num=Number(readline.question())

let temp=num+1;
let flag=false;
for(let i=1;i<=temp/2;i++)
{
    if(i**2 ==temp)
    {
        flag=true;
        break;
    }
}
if (flag==true)
 {
    console.log("true");  
}
else
{
    console.log("false");
}