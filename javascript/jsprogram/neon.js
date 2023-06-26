var readline=require("readline-sync")

console.log("Enter the no");
var num=Number(readline.question());

let temp=num;
let sum=0;
let square=0;

if(num!=0)
{
    square=num*num;

    while(square!=0)
    {
        sum=square+sum%10;
        square=Math.floor(square/10)
    }
}
if(sum==num)
{
    console.log("it is  neon number");

}
else{
    console.log("it is not neon number");
}