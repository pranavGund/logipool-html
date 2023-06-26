var readline=require("readline-sync")

console.log("Select the operation");
var num=String(readline.question());
 let temp=num;
let sum=0;

while(temp != 0)
{
    let rem=temp%10;
    temp=Math.floor(temp/10);
    let fact=1;
    for (let i= 1; i<=rem; i ++)
     {
        
        fact=fact*i;
       
        
    }
    // console.log(fact);
    
     sum=sum+fact;
    
}
console.log(sum);
if (sum==num) {
    console.log("it is peterson number");
}
else{
    console.log("it is not peterson number");
}

