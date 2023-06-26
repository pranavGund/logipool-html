var readline=require("readline-sync")

console.log("select the operation")
var ip=String(readline.question())

console.log("enter first value ")
var num1=Number(readline.question())

console.log("enter second value")
var num2=Number(readline.question())

switch (ip) {
    case "*": console.log(num1*num2);
        break;
    case "/":console.log(num1/num2);
        break;
    default: console.log("invalid Input");
        break;
}