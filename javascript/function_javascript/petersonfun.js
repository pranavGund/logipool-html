var readline=require("readline-sync")

console.log("enter the number");
var num=Number(readline.question())

function FactNo(num)
 {
    let fact=1;
    for(i=1;i<=num;i++)
    {
        fact=fact*i;
    }
     return fact;
}

function SumOfFactOfDigit(num)
{
    let sumOfFact=0;
    while(num!=0)
    {
    let rem=num%10;
    let fact=FactNo(rem)
    sumOfFact=sumOfFact+fact;
    num=Math.floor(num/10);
    }
    return sumOfFact;
}

function Ispeterson(num,sumOfFact)
{
   if(sumOfFact==num) 
   {
    console.log("it is peterson no.");
   }
   else
   {
        console.log("it is not peterson no.");
   }
}
var sumOfFact=SumOfFactOfDigit(num)
Ispeterson(num,sumOfFact);


