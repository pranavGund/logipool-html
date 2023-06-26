let readline=require("readline-sync");
console.log("Enter Number");
let num=Number(readline.question());
// let num=1412;
let sum=0;
let product=1;
let digit=0;

while(num>0)
{
digit=num%10;
num=Math.floor(num/10);
sum=sum+digit;
product=product*digit;
}

console.log(sum);
console.log(product);

if(sum==product)
{
    console.log("Spy number");
}
else
{
    console.log("Not Spy number");
}
