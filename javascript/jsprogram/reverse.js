var readline=require("readline-sync")
console.log("enter the number")
var num=Number(readline.question())
let temp=num;

let rev=0;

while(num!=0)
{
    let rem=num%10;
    num=Math.floor(num/10)
    rev=rev*10+rem
}


// if(temp==rev)
// {
//     console.log("it is palindrome number");
// }
// else
// {
//     console.log("it is not a palindrome number");
// }