// let num=76;
// let temp=num;
var readline=require("readline-sync")

console.log("Enter the no");
var num=Number(readline.question());
let square=1;

square=num*num;
console.log(square);
while (num > 0) 
{

    if(num%10 !=square%10)
    {
        console.log("it is not  automorphic no");
    }
    else
    {
        console.log("it is automorphic no");
    }
    break;
    
    // temp=num;    
}
