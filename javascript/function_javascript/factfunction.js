var readline=require("readline-sync")
console.log("enter the number")
var num1=Number(readline.question())

function FactNo(num)
 {
    let fact=1;
    for(i=1;i<=num;i++)
    {
        fact=fact*i;
    }
    // return fact;
    // console.log(fact);
}

//  var res=FactNo(num);
//  console.log(res);
FactNo(num1);