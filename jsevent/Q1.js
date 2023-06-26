var readline=require("readline-sync")

console.log("select the operation")
var ip=String(readline.question())
// let ip;
console.log("enter first value ")
var num1=Number(readline.question())

console.log("enter second value")
var num2=Number(readline.question())

// function multiplyBy()
// {
//     ip=num1*num2
//     return ip
// }
// console.log(multiplyBy());

// function divideBy()
// {
//     ip=num1/num2;
//     return ip;    
// }
// console.log(divideBy())
switch (ip) {
    case "*":console.log("res:"+ num1*num2);
        
        break;
    case "/":console.log("res:"+ num1/num2);
        break;
    default: console.log("invalid input");
        break;
}